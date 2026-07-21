export function DecorativeArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The massive looping hand-drawn path */}
      <path
        d="M 150 550 C 100 100, 450 50, 550 150 C 700 300, 450 500, 600 400 C 700 330, 750 250, 850 300"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* The arrow head */}
      <path
        d="M 810 260 L 850 300 L 790 330"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
