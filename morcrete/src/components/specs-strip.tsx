import { CheckIcon } from "./icons";

const items = [
  "WASHINGTON L&I LICENSED",
  "BONDED + INSURED",
  "OSHA-10 CREWS",
  "SCHEDULED, NOT SQUEEZED",
  "BUILT FOR BUILDERS",
];

export function SpecsStrip() {
  return (
    <section className="specs-strip">
      <div className="container">
        <div className="specs-row">
          {items.map((t, i) => (
            <span key={i}>
              <span className="item">
                <CheckIcon />
                {t}
              </span>
              {i < items.length - 1 && <span className="sep"> / </span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
