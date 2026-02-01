import React from "react";

export default function Logo({ className = "", style = {} }) {
  return (
    <svg width="150" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <g>
        <text x="0" y="25" fontSize="28" fontFamily="Times New Roman" fontWeight="bolder" fill="#222">MIER</text>
        <text x="0" y="48" fontSize="18" fontFamily="Times New Roman" fontWeight="bold" fill="#222" opacity="0.7">IMMOBILIEN</text>
      </g>
    </svg>
  );
}
