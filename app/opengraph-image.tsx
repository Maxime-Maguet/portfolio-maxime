import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Maxime Maguet — Développeur Fullstack JS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAFAFA',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0A0A0A' }} />
          <span style={{ fontSize: '14px', color: '#666666', letterSpacing: '0.05em' }}>
            PORTFOLIO · 2026
          </span>
        </div>

        <div style={{ fontSize: '72px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '8px' }}>
          Maxime Maguet,
        </div>
        <div style={{ fontSize: '72px', fontWeight: 400, fontStyle: 'italic', color: '#666666', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '40px' }}>
          développeur fullstack.
        </div>

        <div style={{ fontSize: '20px', color: '#1A1A1A', maxWidth: '640px', lineHeight: 1.5 }}>
          React · Node.js · Next.js · DevOps — Alternance Toulouse · Septembre 2026
        </div>

        <div style={{ position: 'absolute', bottom: '80px', right: '80px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
          <span style={{ fontSize: '14px', color: '#666666' }}>Disponible</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
