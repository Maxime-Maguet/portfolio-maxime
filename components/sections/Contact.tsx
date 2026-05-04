import { contactLinks, contactCells } from '@/lib/data/contact'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">

          <div className="contact-eyebrow">04 / Contact</div>

          <h2 className="contact-title">
            Parlons<br />
            <span className="italic">de votre projet.</span>
          </h2>

          <p className="contact-sub">
            Disponible en alternance 12 mois — Contrat de Professionnalisation
            à Toulouse dès septembre 2026. 100% financé OPCO.
          </p>

          <div className="contact-actions">
            <a href={`mailto:${contactLinks.email}`} className="btn btn-primary">
              Envoyer un message <span className="btn-arrow">→</span>
            </a>
            <a
              href={contactLinks.linkedinHref}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="contact-grid">
            {contactCells.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-cell"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="cell-label">{label}</div>
                <div className="cell-value">{value}</div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
