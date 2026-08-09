import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export default function SectionReveal({
  as: Component = 'div',
  children,
  className,
  delay = 0,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={clsx('section-reveal', visible && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}ms`, ...props.style }}
      {...props}
    >
      {children}
    </Component>
  )
}
