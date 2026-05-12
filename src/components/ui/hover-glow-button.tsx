"use client";

import { useState } from "react";
import Link from "next/link";

interface HoverGlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  glowColor?: string;
}

export function HoverGlowButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  glowColor = "#2C9FFF",
}: HoverGlowButtonProps) {
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const containerClass = `relative overflow-hidden isolate ${className}`;

  const containerStyle: React.CSSProperties = {
    transform: pressed ? "scale(0.97)" : hovered ? "scale(1.05)" : "scale(1)",
    transition:
      "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease",
  };

  const glow = (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        left: glowPos.x,
        top: glowPos.y,
        width: hovered ? "240px" : "0px",
        height: hovered ? "240px" : "0px",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        opacity: hovered ? 0.28 : 0,
        background: `radial-gradient(circle, ${glowColor} 5%, transparent 70%)`,
        transition:
          "width 0.35s ease-out, height 0.35s ease-out, opacity 0.35s ease-out",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className={containerClass}
        style={containerStyle}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        {children}
        {glow}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={containerClass}
      style={containerStyle}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {children}
      {glow}
    </button>
  );
}
