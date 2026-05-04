import Image from 'next/image'
import { projets } from '@/lib/data/projets'

function ProjectMockup({ screenshot, name }: { screenshot?: string; name: string }) {
  return (
    <div className="mockup">
      <div className="mockup-bar">
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-url" />
      </div>
      {screenshot ? (
        <div className="mockup-screenshot">
          <Image
            src={screenshot}
            alt={`Capture d'écran ${name}`}
            width={560}
            height={360}
            className="mockup-img"
          />
        </div>
      ) : (
        <div className="mockup-content">
          <div className="mock-line title" />
          <div className="mock-line short" />
          <div className="mock-line accent" />
          <div className="mock-grid">
            <div className="mock-card" />
            <div className="mock-card" />
            <div className="mock-card" />
            <div className="mock-card" />
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projets() {
  return (
    <section className="section projects" id="projets">
      <div className="container">

        <div className="section-head">
          <div className="section-num">02 / Projets</div>
          <h2 className="section-title">
            Du code<br />
            <span className="italic">en production.</span>
          </h2>
        </div>

        <div className="project-list">
          {projets.map((projet) => (
            <article
              key={projet.id}
              className={`project${projet.reverse ? ' reverse' : ''}`}
            >
              <div className="project-info">
                <div className="project-status">
                  <span className={`status-dot ${projet.status}`} />
                  {projet.statusLabel}
                </div>

                <h3 className="project-name">{projet.name}</h3>
                <div className="project-tagline">{projet.tagline}</div>
                <p className="project-desc">{projet.desc}</p>

                <div className="project-tech">
                  {projet.tech.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {projet.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`proj-btn proj-btn-${link.variant}`}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-visual">
                <ProjectMockup screenshot={projet.screenshot} name={projet.name} />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
