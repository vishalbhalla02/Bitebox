import React from "react";

function Reload() {
  return (
    <div className="h-screen flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "rgb(255, 255, 255)",
        }}
      >
        <g>
          <path
            strokeWidth="8"
            stroke="#c2aeb0"
            fill="none"
            d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
          ></path>
          <path fill="#c2aeb0" d="M49 -5L49 35L69 15L49 -5"></path>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50;360 50 50"
            dur="1.25s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}

export default Reload;
