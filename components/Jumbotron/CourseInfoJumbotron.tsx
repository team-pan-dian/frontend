import type { ReactNode } from "react";
import React from "react";
import CourseInfo from "../Combination/CourseInfo";

export interface CourseInfoJumbotronProps {
  /**
   * 課程名稱
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

/**
 * 用在課程專屬頁面的開頭 Jumbotron。
 */
export function CourseInfoJumbotron({
  title,
  desc,
  tags,
}: CourseInfoJumbotronProps) {
  return (
    <div className="flex flex-col items-center text-white">
      <CourseInfo title={title} desc={desc} tags={tags} />
    </div>
  );
}

export const CourseInfoJumbotronClassName =
  "py-6 pt-32 px-6 flex items-end justify-left bg-blend-darken bg-cover";
export const CourseInfoJumbotronStyle = (backgroundImage: string) =>
  ({
    backgroundImage: `linear-gradient(to bottom, transparent, #000), url('${backgroundImage}')`,
  } as React.CSSProperties);
