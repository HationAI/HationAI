import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-20 h-20",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Premium Vertical Gradient: Darker Blue -> Rich Royal -> Vibrant Sky Azure */}
        <linearGradient id="logo-grad-primary" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#153e90" /> {/* Dark Royal Blue */}
          <stop offset="45%" stopColor="#1e5fdf" /> {/* Rich Medium Blue */}
          <stop offset="100%" stopColor="#4392f1" /> {/* Bright Azure Sky */}
        </linearGradient>
        
        {/* Soft 3D volumetric shadow filter */}
        <filter id="logo-3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Main vector group with 3D shadow */}
      <g filter="url(#logo-3d-shadow)">
        {/* Left Pillar of the 'H' */}
        <path
          d="M 14 28
             Q 26 26, 38 28
             C 33 28, 31 31, 31 36
             L 31 72
             C 31 77, 33 80, 38 80
             Q 26 82, 14 80
             C 19 80, 21 77, 21 72
             L 21 36
             C 21 31, 19 28, 14 28 Z"
          fill="url(#logo-grad-primary)"
        />

        {/* Right Pillar of the 'H' */}
        <path
          d="M 62 28
             Q 74 26, 86 28
             C 81 28, 79 31, 79 36
             L 79 72
             C 79 77, 81 80, 86 80
             Q 74 82, 62 80
             C 67 80, 69 77, 69 72
             L 69 36
             C 69 31, 67 28, 62 28 Z"
          fill="url(#logo-grad-primary)"
        />

        {/* Middle Pillar: Body of the 'i' */}
        <path
          d="M 42 38
             Q 50 37, 58 38
             C 56 38, 55 40, 55 43
             L 55 72
             C 55 77, 56 80, 61 80
             Q 50 82, 39 80
             C 44 80, 45 77, 45 72
             L 45 43
             C 45 40, 44 38, 42 38 Z"
          fill="url(#logo-grad-primary)"
        />

        {/* Left Connection Bar (rounded bridge) */}
        <rect
          x="28"
          y="49"
          width="20"
          height="8.5"
          rx="4.25"
          fill="url(#logo-grad-primary)"
        />

        {/* Right Connection Bar (rounded bridge) */}
        <rect
          x="52"
          y="49"
          width="20"
          height="8.5"
          rx="4.25"
          fill="url(#logo-grad-primary)"
        />

        {/* Floating Dot of the 'i' */}
        <circle
          cx="50"
          cy="21.5"
          r="7"
          fill="url(#logo-grad-primary)"
        />
      </g>
    </svg>
  );
}
