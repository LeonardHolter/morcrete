import { ArrowRight } from "./icons";

const reasons = [
  {
    num: "01",
    title: "We hold the schedule.",
    copy: "When you tell us a lot is grade-ready, we're on it within 48 hours — not next week. Our crews work on builder timelines, not retail.",
  },
  {
    num: "02",
    title: "One crew, one trade.",
    copy: "Flatwork is all we do. No bouncing between excavation and footings; no juggling priorities mid-pour. The crew on Lot 12 isn't pulled to a foundation across town.",
  },
  {
    num: "03",
    title: "Spec-clean finishes.",
    copy: "Broom, float, exposed aggregate, light stamp — finished to your floor-plan package and matched across phases. Buyers don't see seams.",
  },
  {
    num: "04",
    title: "Volume pricing that holds.",
    copy: "Bids structured around your annual lot count. Per-square-foot pricing locked in by phase, with no surprise rebar or finish upcharges.",
  },
  {
    num: "05",
    title: "Pacific Northwest-ready.",
    copy: "Cold pours, wet pours, fall callbacks. Our admixture protocols and crew training are built for SW Washington and Portland Metro weather, not Phoenix.",
  },
  {
    num: "06",
    title: "Direct line to ownership.",
    copy: "Every active GC has Brett's cell. Issues escalate to ownership the same day, not after a sales-rep handoff.",
  },
];

export function ForBuilders() {
  return (
    <section id="builders" className="builders">
      <div className="container">
        <div className="builders-grid">
          <div>
            <div className="eyebrow green" style={{ color: "var(--green)" }}>
              <span className="dot" />
              FOR HOMEBUILDERS &amp; GCS
            </div>
            <h2 style={{ marginTop: 16 }}>
              Built around the way <br />
              you actually <span className="green">build.</span>
            </h2>
            <p className="builders-lead">
              Morcrete is not a residential contractor that takes builder work on
              the side. We&apos;re a flatwork shop staffed and scheduled around
              production homebuilding — phase pulls, lot releases, weather
              windows, and inspection cadence.
            </p>
            <div
              style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}
            >
              <a href="#contact" className="btn btn-primary">
                Get on our schedule <ArrowRight />
              </a>
              <a
                href="#process"
                className="btn"
                style={{
                  background: "transparent",
                  color: "var(--bone)",
                  border: "1px solid rgba(245,242,236,0.3)",
                }}
              >
                See our process <ArrowRight />
              </a>
            </div>
          </div>

          <div className="builders-list">
            {reasons.map((r) => (
              <div key={r.num} className="builder-cell">
                <span className="num">/ {r.num}</span>
                <h4>{r.title}</h4>
                <p>{r.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
