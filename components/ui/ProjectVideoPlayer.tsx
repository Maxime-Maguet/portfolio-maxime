'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  name: string
  poster?: string
}

export default function ProjectVideoPlayer({ src, name, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handleMouseEnter() {
    const v = videoRef.current
    if (!v) return
    v.play().then(() => setPlaying(true)).catch(() => {})
  }

  function handleMouseLeave() {
    const v = videoRef.current
    if (!v) return
    v.pause()
    setPlaying(false)
  }

  return (
    <div
      className="video-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="project-video"
        loop
        muted
        playsInline
        aria-label={`Démo ${name}`}
      />

      {poster && !playing && (
        <Image
          src={poster}
          alt={`Aperçu ${name}`}
          fill
          className="video-poster-overlay"
        />
      )}

      {!playing && (
        <div className="video-hint" aria-hidden="true">▶</div>
      )}
    </div>
  )
}
