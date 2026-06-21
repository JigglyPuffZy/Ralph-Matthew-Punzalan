import { useEffect, useRef } from 'react'
import { gridConfig } from '../data/hero'

export function useHero() {
  const heroRef = useRef(null)
  const canvasRef = useRef(null)
  const drawPathRef = useRef(null)
  const drawLineSvgRef = useRef(null)
  const pointerRef = useRef({ active: false, x: 0, y: 0 })
  const pointerPointsRef = useRef([])
  const pendingPointerRef = useRef(null)
  const pointerMoveFrameRef = useRef(0)
  const pointerTrackingRef = useRef(false)
  const gridAnimationRef = useRef({ start: () => {} })
  const clickPulsesRef = useRef([])

useEffect(() => {
    const canvas = canvasRef.current
    const hero = heroRef.current

    if (!canvas || !hero) {
      return undefined
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return undefined
    }

    let animationFrame = 0
    let isAnimating = false
    let lastDrawTime = 0
    let width = 0
    let height = 0
    const resizeCanvas = () => {
      const bounds = hero.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)

      width = bounds.width
      height = bounds.height
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      if (drawLineSvgRef.current && width > 0 && height > 0) {
        drawLineSvgRef.current.setAttribute('viewBox', `0 0 ${width} ${height}`)
      }

      pointerPointsRef.current = []
      drawPathRef.current?.setAttribute('d', '')
    }

    const getKineticPoint = (x, y, now) => {
      const pointer = pointerRef.current
      let kineticX = x
      let kineticY = y
      let energy = 0

      if (pointer.active) {
        const distanceX = x - pointer.x
        const distanceY = y - pointer.y
        const distance = Math.hypot(distanceX, distanceY)

        if (distance < gridConfig.radius) {
          const force = (1 - distance / gridConfig.radius) ** 2
          const angle = Math.atan2(distanceY, distanceX)
          const shift = gridConfig.repulsion * gridConfig.radius * 0.22 * force

          kineticX += Math.cos(angle) * shift
          kineticY += Math.sin(angle) * shift
          energy += force
        }
      }

      clickPulsesRef.current.forEach((pulse) => {
        const age = now - pulse.createdAt
        const waveRadius = age * 0.9
        const distanceX = x - pulse.x
        const distanceY = y - pulse.y
        const distance = Math.hypot(distanceX, distanceY)
        const waveDistance = Math.abs(distance - waveRadius)

        if (waveDistance < 70) {
          const force = (1 - waveDistance / 70) * (1 - age / 700)
          const angle = Math.atan2(distanceY, distanceX)
          const shift = gridConfig.clickStrength * 24 * force

          kineticX += Math.cos(angle) * shift
          kineticY += Math.sin(angle) * shift
          energy += force
        }
      })

      return { energy: Math.min(1, energy), x: kineticX, y: kineticY }
    }

    const drawGrid = (now) => {
      if (now - lastDrawTime < 32) {
        animationFrame = requestAnimationFrame(drawGrid)
        return
      }

      lastDrawTime = now
      context.clearRect(0, 0, width, height)

      clickPulsesRef.current = clickPulsesRef.current.filter(
        (pulse) => now - pulse.createdAt < 700,
      )

      const columns = Math.ceil(width / gridConfig.gridSize) + 2
      const rows = Math.ceil(height / gridConfig.gridSize) + 2
      const points = Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, column) =>
          getKineticPoint(column * gridConfig.gridSize, row * gridConfig.gridSize, now),
        ),
      )

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const point = points[row][column]
          const opacity = gridConfig.farOpacity + point.energy * 0.58

          context.strokeStyle = `rgba(${gridConfig.gridColor}, ${opacity})`
          context.lineWidth = 1

          if (column < columns - 1) {
            const nextPoint = points[row][column + 1]
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(nextPoint.x, nextPoint.y)
            context.stroke()
          }

          if (row < rows - 1) {
            const nextPoint = points[row + 1][column]
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(nextPoint.x, nextPoint.y)
            context.stroke()
          }

          context.fillStyle = `rgba(${gridConfig.gridColor}, ${0.28 + point.energy * 0.72})`
          context.beginPath()
          context.arc(point.x, point.y, gridConfig.dotSize + point.energy * 1.4, 0, Math.PI * 2)
          context.fill()
        }
      }

      if (pointerRef.current.active) {
        const gradient = context.createRadialGradient(
          pointerRef.current.x,
          pointerRef.current.y,
          0,
          pointerRef.current.x,
          pointerRef.current.y,
          gridConfig.radius,
        )

        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.16)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        context.fillStyle = gradient
        context.fillRect(0, 0, width, height)
      }

      clickPulsesRef.current.forEach((pulse) => {
        const age = now - pulse.createdAt
        const radius = age * 0.75

        context.strokeStyle = `rgba(${gridConfig.gridColor}, ${Math.max(0, 0.32 - age / 1500)})`
        context.lineWidth = 2
        context.beginPath()
        context.arc(pulse.x, pulse.y, radius, 0, Math.PI * 2)
        context.stroke()
      })

      if (pointerRef.current.active || clickPulsesRef.current.length > 0) {
        animationFrame = requestAnimationFrame(drawGrid)
        return
      }

      isAnimating = false
      animationFrame = 0
    }

    const startGridAnimation = () => {
      if (isAnimating) {
        return
      }

      isAnimating = true
      animationFrame = requestAnimationFrame(drawGrid)
    }

    const handleResize = () => {
      resizeCanvas()
      drawGrid(performance.now())
    }

    gridAnimationRef.current = { start: startGridAnimation }
    resizeCanvas()
    drawGrid(performance.now())
    window.addEventListener('resize', handleResize)

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(handleResize) : null
    resizeObserver?.observe(hero)

    return () => {
      cancelAnimationFrame(animationFrame)
      gridAnimationRef.current = { start: () => {} }
      window.removeEventListener('resize', handleResize)
      resizeObserver?.disconnect()
    }
  }, [])

useEffect(() => () => {
    if (pointerMoveFrameRef.current) {
      cancelAnimationFrame(pointerMoveFrameRef.current)
    }
  }, [])

const updateDrawPath = () => {
    const points = pointerPointsRef.current
    const drawPath = drawPathRef.current

    if (!drawPath || points.length < 1) {
      return
    }

    if (points.length === 1) {
      const [point] = points
      drawPath.setAttribute('d', `M ${point.x} ${point.y} L ${point.x + 0.01} ${point.y + 0.01}`)
      return
    }

    const [firstPoint, ...restPoints] = points
    const path = restPoints.reduce(
      (pathValue, point, index) => {
        const previousPoint = points[index]
        const midX = (previousPoint.x + point.x) / 2
        const midY = (previousPoint.y + point.y) / 2

        return `${pathValue} Q ${previousPoint.x} ${previousPoint.y}, ${midX} ${midY}`
      },
      `M ${firstPoint.x} ${firstPoint.y}`,
    )

    drawPath.setAttribute('d', path)
  }

  const clearDrawPath = () => {
    if (pointerMoveFrameRef.current) {
      cancelAnimationFrame(pointerMoveFrameRef.current)
      pointerMoveFrameRef.current = 0
    }

    pendingPointerRef.current = null
    pointerRef.current.active = false
    pointerTrackingRef.current = false
    pointerPointsRef.current = []
    drawPathRef.current?.setAttribute('d', '')

    if (heroRef.current) {
      heroRef.current.dataset.pointer = 'idle'
    }
  }

  const isInteractiveTarget = (target) => target?.closest?.('a, button, [role="button"], .tech-logo')

  const getHeroPointFromEvent = (event) => {
    const hero = heroRef.current

    if (!hero) {
      return null
    }

    const bounds = hero.getBoundingClientRect()
    const touch = event.touches?.[0] ?? event.changedTouches?.[0]
    const clientX = touch?.clientX ?? event.clientX
    const clientY = touch?.clientY ?? event.clientY

    if (clientX == null || clientY == null) {
      return null
    }

    return {
      x: clientX - bounds.left,
      y: clientY - bounds.top,
    }
  }

  const applyHeroPointerPoint = (point) => {
    const hero = heroRef.current

    if (!hero || !point) {
      return
    }

    hero.style.setProperty('--pointer-x', `${point.x}px`)
    hero.style.setProperty('--pointer-y', `${point.y}px`)
    hero.dataset.pointer = 'active'
    pointerRef.current = { active: true, x: point.x, y: point.y }
    gridAnimationRef.current.start()

    pointerPointsRef.current = [
      ...pointerPointsRef.current,
      { x: Math.round(point.x), y: Math.round(point.y) },
    ].slice(-28)

    updateDrawPath()
  }

  const queueHeroPointerPoint = (point) => {
    pendingPointerRef.current = point

    if (pointerMoveFrameRef.current) {
      return
    }

    pointerMoveFrameRef.current = requestAnimationFrame(() => {
      pointerMoveFrameRef.current = 0
      applyHeroPointerPoint(pendingPointerRef.current)
    })
  }

  useEffect(() => {
    const hero = heroRef.current

    if (!hero) {
      return undefined
    }

    const handleMove = (event) => {
      const isTouchLike = event.pointerType === 'touch' || event.type.startsWith('touch')

      if (isTouchLike && !pointerTrackingRef.current) {
        return
      }

      if (isInteractiveTarget(event.target)) {
        clearDrawPath()
        return
      }

      const point = getHeroPointFromEvent(event)

      if (!point) {
        return
      }

      queueHeroPointerPoint(point)
    }

    const handleDown = (event) => {
      if (event.type.startsWith('touch') && window.PointerEvent) {
        return
      }

      if (isInteractiveTarget(event.target)) {
        return
      }

      pointerTrackingRef.current = true

      if (typeof hero.setPointerCapture === 'function' && event.pointerId != null) {
        try {
          hero.setPointerCapture(event.pointerId)
        } catch {
          // Ignore capture errors on unsupported browsers.
        }
      }

      const point = getHeroPointFromEvent(event)

      if (point) {
        pointerPointsRef.current = []
        applyHeroPointerPoint(point)
      }

      const bounds = hero.getBoundingClientRect()
      clickPulsesRef.current = [
        ...clickPulsesRef.current,
        {
          createdAt: performance.now(),
          x: point?.x ?? event.clientX - bounds.left,
          y: point?.y ?? event.clientY - bounds.top,
        },
      ].slice(-2)

      gridAnimationRef.current.start()
    }

    const handleRelease = (event) => {
      if (event?.type?.startsWith('touch') && window.PointerEvent) {
        return
      }

      pointerTrackingRef.current = false

      if (
        typeof hero.releasePointerCapture === 'function' &&
        event?.pointerId != null &&
        hero.hasPointerCapture?.(event.pointerId)
      ) {
        try {
          hero.releasePointerCapture(event.pointerId)
        } catch {
          // Ignore release errors on unsupported browsers.
        }
      }

      window.setTimeout(() => {
        if (!pointerTrackingRef.current) {
          clearDrawPath()
        }
      }, 120)
    }

    const handlePointerLeave = () => {
      if (pointerTrackingRef.current) {
        return
      }

      clearDrawPath()
    }

    hero.addEventListener('pointerdown', handleDown, { passive: true })
    hero.addEventListener('pointermove', handleMove, { passive: true })
    hero.addEventListener('pointerup', handleRelease, { passive: true })
    hero.addEventListener('pointercancel', handleRelease, { passive: true })
    hero.addEventListener('pointerleave', handlePointerLeave, { passive: true })

    if (!window.PointerEvent) {
      hero.addEventListener('touchstart', handleDown, { passive: true })
      hero.addEventListener('touchmove', handleMove, { passive: true })
      hero.addEventListener('touchend', handleRelease, { passive: true })
      hero.addEventListener('touchcancel', handleRelease, { passive: true })
    }

    return () => {
      hero.removeEventListener('pointerdown', handleDown)
      hero.removeEventListener('pointermove', handleMove)
      hero.removeEventListener('pointerup', handleRelease)
      hero.removeEventListener('pointercancel', handleRelease)
      hero.removeEventListener('pointerleave', handlePointerLeave)

      if (!window.PointerEvent) {
        hero.removeEventListener('touchstart', handleDown)
        hero.removeEventListener('touchmove', handleMove)
        hero.removeEventListener('touchend', handleRelease)
        hero.removeEventListener('touchcancel', handleRelease)
      }
    }
  }, [])

  return {
    canvasRef,
    drawLineSvgRef,
    drawPathRef,
    heroRef,
  }
}
