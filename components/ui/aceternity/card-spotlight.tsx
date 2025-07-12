"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  className,
  radius = 350,
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div
      className={cn(
        "relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(${radius}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};