import { ArrowRight, Plus } from "./icons";
import { Placeholder } from "./placeholder";

const tiles = [
  { ttl: "42-driveway production phase", sub: "SALMON CREEK · DRIVEWAYS", v: "warm" as const, k: "AERIAL" },
  { ttl: "Stamped patio · model home", sub: "FELIDA · PATIOS", v: "green-tint" as const, k: "FINISH" },
  { ttl: "ADA walks · phase release", sub: "RIDGEFIELD · WALKWAYS", v: "cool" as const, k: "GROUND" },
  { ttl: "Broom finish driveway pair", sub: "BATTLE GROUND · DRIVEWAYS", v: "warm" as const, k: "GROUND" },
  { ttl: "Exposed-aggregate front walk", sub: "CAMAS · WALKWAYS", v: "dark" as const, k: "DETAIL" },
];

export function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-head">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              SELECTED PROJECTS
            </div>
            <h2 style={{ marginTop: 16 }}>
              Pours from across
              <br />
              the metro.
            </h2>
          </div>
          <a href="#contact" className="btn btn-ghost">
            View full portfolio <ArrowRight />
          </a>
        </div>

        <div className="gallery-grid">
          {tiles.map((t, i) => (
            <div key={i} className="gallery-tile">
              <Placeholder variant={t.v} kind={t.k} />
              <div className="grad" />
              <div className="meta">
                <div>
                  <div className="sub">{t.sub}</div>
                  <div className="ttl">{t.ttl}</div>
                </div>
                <Plus />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
