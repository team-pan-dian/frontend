import type { ReactNode } from "react";
import React from "react";

export interface BaseCardProps {
  children: ReactNode;
}

export default function BaseCard({ children }: BaseCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg main-content md:w-max standard-color">
      {children}
    </div>
  );
}
