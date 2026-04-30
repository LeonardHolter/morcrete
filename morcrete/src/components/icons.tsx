import Image from "next/image";

export function Logo({ height = 40 }: { height?: number }) {
  return (
    <Image
      src="/morcrete-logo.png"
      alt="Morcrete — Concrete Flatwork"
      width={Math.round(height * 3.2)}
      height={height}
      priority
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

export function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg className="btn-arrow" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function Plus({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 5l3 3 5-6" stroke="#4FA834" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}
