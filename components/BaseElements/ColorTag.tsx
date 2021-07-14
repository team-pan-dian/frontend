import React from "react";
import { randColor } from "../../utilities/randcolor";

export interface ColorTagProps {
  children: string;
}

/**
 * 彩色標籤。
 */
export function ColorTag({ children: tag }: ColorTagProps) {
  return (
    <div
      className={`w-12 h-6 rounded-2xl bg-${randColor()}-800 text-white text-sm place-center`}
    >
      {tag}
    </div>
  );
}
