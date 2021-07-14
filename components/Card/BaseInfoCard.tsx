import type { ReactNode } from "react";
import React from "react";

export interface BaseInfoCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 基礎資訊卡。較一般卡片 (`BaseInfoCard.tsx`) 小。
 */
export default function BaseInfoCard({
  children,
  className = "",
  style = {},
}: BaseInfoCardProps) {
  return (
    <div
      className={`info-card rounded shadow-lg min-h-card min-w-64 md:min-w-72 ${className} cursor-pointer`}
      style={style}
    >
      {children}
    </div>
  );
}
