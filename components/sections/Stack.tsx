import { stack } from '@/lib/data/stack'

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="container">

        <div className="section-head">
          <div className="section-num">03 / Stack</div>
          <h2 className="section-title">
            Les outils<br />
            <span className="italic">du métier.</span>
          </h2>
        </div>

        <div className="stack-grid">
          {stack.map((category) => (
            <div key={category.id} className="stack-col">
              <div className="stack-col-head">
                <span>{category.title}</span>
                <span className="stack-count">{category.items.length}</span>
              </div>
              {category.items.map((item) => (
                <div key={item.name} className="stack-row">
                  <span className="stack-name">{item.name}</span>
                  <span className={`stack-status stack-status--${item.status}`}>
                    <span className="stack-dot" />
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
