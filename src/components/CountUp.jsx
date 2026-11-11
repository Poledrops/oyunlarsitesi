import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Counts from 0 to `value` once the element is visible.
export default function CountUp({ value, duration = 1400, className }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  // Reduced motion (or no IntersectionObserver): skip the animation and show the final value.
  const [instant] = useState(() => prefersReducedMotion() || !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el || instant) return undefined

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(value * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration, instant])

  return (
    <span ref={ref} className={className}>
      {instant ? value : display}
    </span>
  )
}
