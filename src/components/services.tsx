import Image from "next/image";
import { ArrowRight } from "./icons";

const services = [
  {
    num: "01",
    tag: "FLATWORK",
    title: "Driveways",
    copy: "Production-grade pours sized for the lot plan and tied into the curb cut. Steel-reinforced, brushed or exposed-aggregate finishes, sized to the builder's spec.",
    specs: ["4\"–6\" slab", "Wire / rebar", "Broom · Float · Stamp"],
    image: "/flatwork_driveway.jpg",
  },
  {
    num: "02",
    tag: "FLATWORK",
    title: "Walkways",
    copy: "Front walks, side paths, lot connectors. Tight tolerances at door thresholds and between phases so you can hand the lot off without callbacks.",
    specs: ["ADA compliant", "Saw-cut joints", "Color match"],
    image: "/walkway_flatwork.jpg",
  },
  {
    num: "03",
    tag: "FLATWORK",
    title: "Patios",
    copy: "Backyard slabs spec'd to the floor-plan package. We pour after rough landscape, ahead of fence — without slowing your finish punch list.",
    specs: ["Stamped · Smooth", "Drainage slope", "Expansion seams"],
    image: "/patio.jpg",
  },
];

export function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-head">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              WHAT WE POUR
            </div>
            <h2 style={{ marginTop: 16 }}>
              Flatwork, done&nbsp;right.
            </h2>
          </div>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.num} className="service-card">
              <div className="service-image">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className="service-num">{s.num} / 03</span>
                <span className="service-tag">{s.tag}</span>
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <div className="service-specs">
                  {s.specs.map((spec) => (
                    <span key={spec}>{spec}</span>
                  ))}
                </div>
              </div>
              <div className="service-foot">
                <span>See finish options</span>
                <span className="arrow">
                  <ArrowRight />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
