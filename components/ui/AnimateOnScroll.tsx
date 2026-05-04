'use client'

import { useRef, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  stagger?: boolean
  delay?: number
  direction?: 'left' | 'up'
}

export default function AnimateOnScroll({
  children,
  className = '',
  stagger = false,
  delay = 0,
  direction = 'left',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const baseClass = stagger ? 'anim-stagger' : direction === 'up' ? 'anim-fade-up-y' : 'anim-fade-up'
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div
      ref={ref}
      className={`${baseClass}${inView ? ' in-view' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
