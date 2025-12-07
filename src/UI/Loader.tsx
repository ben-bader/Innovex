const Loader = () => {
  return (
    <div className="fixed flex items-center justify-center inset-0 bg-gray-950 z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 360 360"
      >
        <g
          stroke="oklch(62.3% 0.214 259.815)"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <line x1="120" y1="0" x2="120" y2="360" />
          <line x1="240" y1="0" x2="240" y2="360" />
          <line x1="0" y1="120" x2="360" y2="120" />
          <line x1="0" y1="240" x2="360" y2="240" />
        </g>

        <line
          x1="20"
          y1="20"
          x2="100"
          y2="100"
          stroke="oklch(71.4% 0.203 305.504)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="100"
          y1="20"
          x2="20"
          y2="100"
          stroke="oklch(71.4% 0.203 305.504)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="140"
          y1="140"
          x2="220"
          y2="220"
          stroke="oklch(71.4% 0.203 305.504)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline"
            dur="3s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="220"
          y1="140"
          x2="140"
          y2="220"
          stroke="oklch(71.4% 0.203 305.504)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline"
            dur="3s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </line>

        <circle
          cx="60"
          cy="180"
          r="44"
          fill="oklch(62.3% 0.214 259.815)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="300"
          cy="300"
          r="44"
          fill="oklch(62.3% 0.214 259.815)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            calcMode="spline"
            dur="3s"
            begin="0.75s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;
