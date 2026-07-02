import React from 'react';

export default function PaintTexture() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-screen pointer-events-none select-none overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="paint-splatter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <g filter="url(#paint-splatter)" fill="#f00808">
          <path d="M-50,-50 C 300,120 150,450 850,-20 C 1150,-150 1300,400 950,800 C 650,650 350,950 -100,850 Z" />
          <circle cx="20%" cy="60%" r="180" />
          <circle cx="80%" cy="30%" r="220" />
          <path d="M 400,200 Q 550,600 800,400 T 1100,900 L 200,1000 Z" />
        </g>
      </svg>
    </div>
  );
}