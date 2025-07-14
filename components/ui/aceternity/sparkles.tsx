"use client";
import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleSpeed?: number;
  particleColor?: string;
}

export const Sparkles: React.FC<SparklesProps> = ({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  particleDensity = 100,
  particleSpeed = 1,
  particleColor = "#FFF",
}) => {
  const generatedId = useId();
  const internalId = id || generatedId;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id={`sparkle-${internalId}`}>
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background,
        }}
      >
        {[...Array(particleDensity)].map((_, i) => (
          <Sparkle
            key={`sparkle-${i}`}
            id={`sparkle-${internalId}-${i}`}
            color={particleColor}
            minSize={minSize}
            maxSize={maxSize}
            particleSpeed={particleSpeed}
          />
        ))}
      </div>
    </div>
  );
};

interface SparkleProps {
  id: string;
  color: string;
  minSize: number;
  maxSize: number;
  particleSpeed: number;
}

const Sparkle: React.FC<SparkleProps> = ({
  id,
  color,
  minSize,
  maxSize,
  particleSpeed,
}) => {
  const size = Math.random() * (maxSize - minSize) + minSize;
  const left = `${Math.random() * 100}%`;
  const animationDelay = `${Math.random() * 10}s`;
  const animationDuration = `${40 / particleSpeed}s`;

  return (
    <span
      id={id}
      className="pointer-events-none absolute block animate-sparkle"
      style={{
        left,
        top: "-10%",
        width: `${size}px`,
        height: `${size}px`,
        animationDelay,
        animationDuration,
      }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="80" cy="80" r="80" fill={color} />
      </svg>
    </span>
  );
};