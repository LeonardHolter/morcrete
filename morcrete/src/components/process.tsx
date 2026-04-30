const steps = [
  {
    num: "01",
    title: "Bid package",
    copy: "Send us your floor-plan set and lot release schedule. We turn a phase-level bid in 3 business days — flat per-square-foot pricing locked in.",
    stamp: "DAY 1–3",
  },
  {
    num: "02",
    title: "Lock the calendar",
    copy: "Once awarded, we slot your phase into our pour calendar with weather contingencies. You get a named project lead and a shared schedule.",
    stamp: "PRE-POUR",
  },
  {
    num: "03",
    title: "Pour to spec",
    copy: "Grade-ready notice → crew on site within 48 hours. We pour, finish, joint-cut, and clean up to the spec sheet — no walk-of-shame punch list.",
    stamp: "POUR DAY",
  },
  {
    num: "04",
    title: "Hand-off, no callbacks",
    copy: "30-day warranty walk on every lot. Cracks, settling, finish issues — we fix it before your buyer's final walk-through. Period.",
    stamp: "POST-POUR",
  },
];

export function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="process-head">
          <div>
            <div className="eyebrow blue">
              <span className="dot" style={{ background: "var(--blue)" }} />
              HOW WE WORK
            </div>
            <h2 style={{ marginTop: 16 }}>
              From bid to broom finish,
              <br />
              we don&apos;t waste your time.
            </h2>
          </div>
          <p
            style={{
              fontSize: 16,
              color: "var(--ink-2)",
              maxWidth: 460,
              justifySelf: "end",
            }}
          >
            A four-step cadence designed for builders who release phases on a
            calendar — not homeowners shopping for a one-off patio.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.num} className="process-step">
              <div className="num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.copy}</p>
              <div className="stamp">— {s.stamp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
