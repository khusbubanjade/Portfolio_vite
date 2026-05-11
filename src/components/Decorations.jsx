export function FloralDot({ style }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width="40"
      height="40"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
    >
      <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.5" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="10"
          rx="3"
          ry="6"
          fill="currentColor"
          opacity="0.3"
          transform={`rotate(${angle} 20 20)`}
        />
      ))}
    </svg>
  );
}

export function Petal({ style }) {
  return (
    <svg
      viewBox="0 0 80 120"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
    >
      <ellipse
        cx="40"
        cy="60"
        rx="28"
        ry="55"
        fill="currentColor"
        opacity="0.18"
        transform="rotate(-20 40 60)"
      />
    </svg>
  );
}
