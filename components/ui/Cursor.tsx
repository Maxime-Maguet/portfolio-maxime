'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dotOrNull = dotRef.current
    const ringOrNull = ringRef.current
    if (!dotOrNull || !ringOrNull) return

    // Désactivé sur écrans tactiles
    if (window.matchMedia('(pointer: coarse)').matches) return

    // Variables explicitement non-nullable — TypeScript les narrow correctement dans les closures
    const dot: HTMLDivElement = dotOrNull
    const ring: HTMLDivElement = ringOrNull

    let mx = 0, my = 0, rx = 0, ry = 0
    let started = false
    let animId: number

    function handleMouseMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
      if (!started) {
        rx = mx
        ry = my
        started = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
      dot.style.left = `${mx}px`
      dot.style.top = `${my}px`
    }

    function animateRing() {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.left = `${rx}px`
      ring.style.top = `${ry}px`
      animId = requestAnimationFrame(animateRing)
    }

    // Délégation d'événements — un seul écouteur, marche avec le DOM dynamique
    function handleMouseOver(e: MouseEvent) {
      if ((e.target as Element).closest('a, button, [data-cursor-hover]')) {
        ring.classList.add('cursor-hover')
      }
    }
    function handleMouseOut(e: MouseEvent) {
      if ((e.target as Element).closest('a, button, [data-cursor-hover]')) {
        ring.classList.remove('cursor-hover')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    animId = requestAnimationFrame(animateRing)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  )
}
