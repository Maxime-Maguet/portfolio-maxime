import { parcoursItems } from '@/lib/data/parcours'

export default function Parcours() {
  return (
    <section className="section parcours" id="parcours">
      <div className="container">

        <div className="section-head">
          <div className="section-num">01 / Parcours</div>
          <h2 className="section-title">
            Trois actes,<br />
            <span className="italic">un fil rouge.</span>
          </h2>
        </div>

        <div className="parcours-grid">
          {parcoursItems.map((item) => (
            <div key={item.num} className="parc-item">
              <div className="parc-num">{item.num}</div>
              <div className="parc-icon" aria-hidden="true">{item.icon}</div>
              <div className="parc-years">{item.years}</div>
              <div className="parc-role">{item.role}</div>
              <div className="parc-co">{item.company}</div>
              <p className="parc-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
