import type { ReactNode } from "react";
import React from "react";
import { ColorTag } from "../Tags/ColorTag";

export interface CourseInfoProps {
  /**
   * 課程標題
   */
  title: ReactNode;
  /**
   * 課程描述
   */
  desc: ReactNode;
  /**
   * 課程標籤
   */
  tags: string[];
}

export default function CourseInfo({ title, desc, tags }: CourseInfoProps) {
  return (
    <div>
      <div className="mb-1 flex space-x-1">
        {tags.map((tag) => (
          <ColorTag key={`${title}-tag-${tag}`}>{tag}</ColorTag>
        ))}
      </div>
      <div className="text-xl font-bold mb-1">{title}</div>
      <div className="text-sm">{desc}</div>
    </div>
  );
}
