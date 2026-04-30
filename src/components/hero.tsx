import { ArrowRight } from "./icons";
import { Placeholder } from "./placeholder";

export function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-tag">
              <span className="stamp green">FLATWORK &middot; SPECIALISTS</span>
              <span className="stamp">VANCOUVER, WA</span>
              <span className="meta">EST &middot; 1998</span>
            </div>
            <h1>
              Driveways, patios &amp;
              <br />
              walkways for the
              <br />
              <span className="green">
                <em>builders</em>
              </span>{" "}
              who
              <br />
              keep moving.
            </h1>
            <p className="hero-sub">
              Morcrete pours flatwork for new home construction across Southwest
              Washington and Portland Metro. Crews that show up, slabs that pass
              inspection, schedules that hold.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-dark">
                Request a bid <ArrowRight />
              </a>
              <a href="#services" className="btn btn-ghost">
                What we pour <ArrowRight />
              </a>
            </div>
          </div>

          <aside className="hero-side">
            <div className="hero-stat">
              <div className="num">
                <span className="accent">2,400+</span>
              </div>
              <div className="lbl">
                Driveways, walks &amp; patios poured for production builders.
              </div>
            </div>
            <div className="hero-stat">
              <div className="num">$3.8M</div>
              <div className="lbl">
                Annual flatwork volume — built around builder schedules.
              </div>
            </div>
            <div className="hero-stat">
              <div className="num">
                48<span style={{ fontSize: 32 }}>hr</span>
              </div>
              <div className="lbl">
                From grade-ready notice to crew on site.
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image">
            <Placeholder
              variant="cool"
              kind="HERO PHOTO"
              label="Aerial pour, production subdivision — drop image here"
              sub="REPLACE / 2400×1400"
            />
            <div className="hero-image-meta">
              <div className="row">
                <span className="dot" />
                Lot 14 &middot; driveway pour &middot; 7am
              </div>
              <div className="row">
                <span className="dot" style={{ background: "#1E4FA3" }} />
                4500 PSI &middot; broom finish &middot; 4&quot; slab
              </div>
            </div>
            <div className="hero-image-caption">
              <span className="k">Project</span>
              <span className="v">Salmon Creek — Phase 3</span>
              <span className="k">Builder</span>
              <span className="v">Confidential GC</span>
              <span className="k">Scope</span>
              <span className="v">42 driveways &middot; 38 walks</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
