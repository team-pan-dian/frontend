import type { ReactNode } from "react";
import React from "react";

export interface BaseInfoCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function BaseInfoCard({
  children,
  className = "",
  style = {},
}: BaseInfoCardProps) {
  return (
    <div
      className={`info-card rounded shadow-lg w-68 md:w-72 min-h-card ${className} cursor-pointer`}
      style={style}
    >
      {children}
    </div>
  );
}
