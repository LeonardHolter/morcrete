"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    scope: "Driveways",
    lots: "1–10 lots",
    notes: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="cta-strip">
      <div className="container">
        <div className="cta-card">
          <div>
            <div className="eyebrow green" style={{ color: "var(--green)" }}>
              <span className="dot" />
              NEXT STEP
            </div>
            <h2 style={{ marginTop: 16 }}>
              Send us your
              <br />
              floor-plan set.
              <br />
              <span className="green">We&apos;ll bid by Friday.</span>
            </h2>
            <p
              style={{
                marginTop: 24,
                fontSize: 16,
                color: "rgba(245,242,236,0.75)",
                maxWidth: 420,
              }}
            >
              Phase-level bids in 3 business days. Or call Brett directly at{" "}
              <strong style={{ color: "var(--bone)" }}>(360) 907-2558</strong>.
            </p>
            <div
              style={{
                marginTop: 32,
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(245,242,236,0.5)",
              }}
            >
              MORCRETE CONSTRUCTION &middot; VANCOUVER, WA
            </div>
          </div>

          {!submitted ? (
            <form className="cta-form" onSubmit={submit}>
              <div className="micro">— REQUEST A BID</div>
              <div className="form-row">
                <input
                  required
                  placeholder="Company"
                  value={form.company}
                  onChange={update("company")}
                />
                <input
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
              <div className="form-row">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={update("email")}
                />
                <input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={update("phone")}
                />
              </div>
              <div className="form-row">
                <select value={form.scope} onChange={update("scope")}>
                  <option>Driveways</option>
                  <option>Walkways</option>
                  <option>Patios</option>
                  <option>Driveways + walks</option>
                  <option>Full flatwork package</option>
                </select>
                <select value={form.lots} onChange={update("lots")}>
                  <option>1–10 lots</option>
                  <option>11–25 lots</option>
                  <option>26–50 lots</option>
                  <option>50+ lots</option>
                </select>
              </div>
              <textarea
                placeholder="Project notes (location, timeline, specs)"
                value={form.notes}
                onChange={update("notes")}
              />
              <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }}>
                Send to Brett <ArrowRight />
              </button>
            </form>
          ) : (
            <div className="cta-success">
              <div className="check">✓</div>
              <h3 style={{ marginBottom: 8 }}>Bid request received.</h3>
              <p style={{ color: "var(--steel)" }}>
                Brett will reply within one business day. For urgent timelines,
                call <strong>(360) 907-2558</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
