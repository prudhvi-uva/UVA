import type { SignalVariant } from "@/lib/products";
import { cn } from "@/lib/utils";

type SignalWaveformProps = {
  variant: SignalVariant;
  color?: string;
  size?: "compact" | "hero";
  className?: string;
};

function PulseSignal() {
  return (
    <>
      <path
        className="signal-line signal-line-primary"
        d="M12 126 H54 V72 H70 V126 H112 V96 H126 V126 H172 V46 H188 V126 H232 V82 H248 V126 H304 V64 H320 V126 H372 V104 H388 V126 H444 V58 H460 V126 H508 V86 H524 V126 H588"
      />
      <path
        className="signal-line signal-line-ghost"
        d="M12 158 H68 V136 H80 V158 H152 V146 H164 V158 H232 V132 H244 V158 H328 V142 H340 V158 H420 V130 H432 V158 H588"
      />
      {Array.from({ length: 18 }).map((_, index) => (
        <line
          key={index}
          className="signal-tick"
          x1={40 + index * 30}
          x2={40 + index * 30}
          y1={28}
          y2={186}
        />
      ))}
    </>
  );
}

function MeshSignal() {
  const nodes = [
    [72, 96],
    [132, 52],
    [178, 132],
    [252, 78],
    [316, 146],
    [376, 70],
    [454, 118],
    [520, 58],
  ];

  return (
    <>
      <path
        className="signal-line signal-line-primary"
        d="M72 96 L132 52 L178 132 L252 78 L316 146 L376 70 L454 118 L520 58"
      />
      <path
        className="signal-line signal-line-ghost"
        d="M72 96 L178 132 L316 146 M132 52 L252 78 L376 70 L520 58 M252 78 L454 118 M178 132 L376 70"
      />
      {nodes.map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}`}
          className="signal-node"
          cx={cx}
          cy={cy}
          r={index % 2 === 0 ? 5 : 4}
        />
      ))}
    </>
  );
}

function SweepSignal() {
  return (
    <>
      <path className="signal-line signal-line-ghost" d="M120 172 A180 180 0 0 1 480 172" />
      <path className="signal-line signal-line-ghost" d="M182 172 A118 118 0 0 1 418 172" />
      <path className="signal-line signal-line-ghost" d="M244 172 A56 56 0 0 1 356 172" />
      <path className="signal-line signal-line-primary signal-sweep-line" d="M300 172 L452 68" />
      <circle className="signal-node" cx="414" cy="96" r="5" />
      <circle className="signal-node" cx="246" cy="112" r="4" />
      <circle className="signal-node" cx="344" cy="66" r="3.5" />
      <circle className="signal-node signal-node-soft" cx="300" cy="172" r="7" />
    </>
  );
}

export function SignalWaveform({
  variant,
  color = "var(--accent)",
  size = "compact",
  className,
}: SignalWaveformProps) {
  return (
    <div
      className={cn(
        "signal-frame relative overflow-hidden border border-foreground/10 bg-foreground text-background",
        size === "hero" ? "min-h-[360px] rounded-3xl" : "min-h-[260px] rounded-3xl",
        className,
      )}
      style={
        {
          "--accent": color,
          "--signal-line": "color-mix(in srgb, var(--accent) 25%, transparent)",
        } as React.CSSProperties
      }
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 600 220"
        className={cn(
          "absolute inset-0 h-full w-full",
          size === "hero" ? "scale-110" : "scale-100",
        )}
        fill="none"
      >
        <defs>
          <linearGradient id={`signal-fade-${variant}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="18%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="82%" stopColor="var(--accent)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`signal-glow-${variant}`} cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="220" fill={`url(#signal-glow-${variant})`} />
        <g stroke={`url(#signal-fade-${variant})`}>
          {variant === "pulse" && <PulseSignal />}
          {variant === "mesh" && <MeshSignal />}
          {variant === "sweep" && <SweepSignal />}
        </g>
      </svg>
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-70" />
      <div className="absolute bottom-4 left-4 font-body text-[10px] font-bold uppercase tracking-widest text-background/45">
        {variant} signal
      </div>
    </div>
  );
}
