"use client";

import { useState } from "react";

interface LogoDisplayProps {
  src: string;
  alt: string;
  fallbackLabel: string;
  maxHeight?: number;
}

export default function LogoDisplay({
  src,
  alt,
  fallbackLabel,
  maxHeight = 100,
}: LogoDisplayProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <span className="px-5 py-2.5 rounded-full border-2 border-accent/40 bg-accent/5 text-accent text-sm font-bold text-center leading-tight max-w-[220px]">
        {fallbackLabel}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{ maxHeight: `${maxHeight}px`, objectFit: "contain", maxWidth: "100%" }}
      onError={() => setError(true)}
    />
  );
}
