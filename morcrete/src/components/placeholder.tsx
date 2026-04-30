interface PlaceholderProps {
  variant?: "warm" | "cool" | "green-tint" | "dark";
  label?: string;
  sub?: string;
  kind?: string;
}

export function Placeholder({ variant = "warm", label, sub, kind = "AERIAL" }: PlaceholderProps) {
  return (
    <div className={`ph ${variant}`}>
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 10,
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.7)",
          textTransform: "uppercase",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "4px 8px",
          borderRadius: 2,
        }}
      >
        {kind}
      </div>
      {label && (
        <div className="label">
          <div style={{ opacity: 0.65 }}>{sub || "Image placeholder"}</div>
          <div style={{ marginTop: 2 }}>{label}</div>
        </div>
      )}
    </div>
  );
}
