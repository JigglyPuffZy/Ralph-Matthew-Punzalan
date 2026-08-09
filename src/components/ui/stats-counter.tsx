import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatsCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
  style?: React.CSSProperties
}

export default function StatsCounter({
  value,
  duration = 1.5,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  style,
}: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return undefined

    hasAnimatedRef.current = true
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(latest)
      },
    })

    return () => controls.stop()
  }, [isInView, value, duration])

  const formattedValue =
    decimals > 0 ? displayValue.toFixed(decimals) : String(Math.round(displayValue))

  return (
    <span ref={ref} className={cn('stats-counter', className)} style={style}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
