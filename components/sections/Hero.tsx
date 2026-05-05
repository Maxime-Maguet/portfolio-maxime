import Image from "next/image";
import { cardRows, cardStats, heroMeta } from "@/lib/data/hero";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* ── Colonne gauche ── */}
          <div>
            <div
              className="hero-eyebrow fade-up"
              style={{ animationDelay: "0s" }}
            >
              <span className="eyebrow-dot" />
              Disponible pour alternance · Sept. 2026
            </div>

            <h1
              className="hero-title fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Maxime Maguet,
              <br />
              <span className="accent">développeur fullstack.</span>
            </h1>

            <p className="hero-sub fade-up" style={{ animationDelay: "0.2s" }}>
              <strong>
                10 ans à gérer des systèmes audio critiques en live
              </strong>{" "}
              — clubs, arenas, festivals, stades. Aujourd'hui, la même rigueur
              appliquée au code. Fullstack JS avec une spécialisation DevOps en
              amont.
            </p>

            <div
              className="hero-actions fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a href="#projets" className="btn btn-primary">
                Voir les projets <span className="btn-arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Prendre contact
              </a>
            </div>

            <div
              className="hero-meta fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {heroMeta.map(({ label, value }) => (
                <div key={label} className="meta-item">
                  <div className="meta-label">{label}</div>
                  <div className="meta-value">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite — Card ── */}
          <div
            className="hero-card fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="card-header">
              <div className="card-header-l">
                <span className="card-dot" />
                <span className="card-dot" />
                <span className="card-dot" />
                <span className="card-header-title">profile.json</span>
              </div>
              <span className="card-header-r">v2.026</span>
            </div>

            <div className="card-body">
              <div className="card-photo-row">
                <div className="card-photo">
                  <Image
                    src="/images/maxime.jpg"
                    alt="Maxime Maguet"
                    width={96}
                    height={96}
                    className="card-photo-img"
                    priority
                  />
                </div>
                <div className="card-photo-info">
                  <div className="card-photo-name">Maxime Maguet</div>
                  <div className="card-photo-role">
                    Développeur Fullstack JS · Toulouse
                  </div>
                </div>
              </div>

              <div className="card-stats">
                {cardStats.map(({ num, suffix, label }) => (
                  <div key={label} className="card-stat">
                    <div className="card-stat-num">
                      {num}
                      {suffix && (
                        <span
                          style={{ color: "var(--muted)", fontSize: "14px" }}
                        >
                          {suffix}
                        </span>
                      )}
                    </div>
                    <div className="card-stat-label">{label}</div>
                  </div>
                ))}
              </div>

              <div className="card-list">
                {cardRows.map(({ label, value, accent }) => (
                  <div key={label} className="card-row">
                    <span className="card-row-label">{label}</span>
                    <span
                      className={`card-row-value${accent ? " accent-text" : ""}`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
