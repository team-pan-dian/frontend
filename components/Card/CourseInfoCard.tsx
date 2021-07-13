import type { ReactNode } from "react";
import React from "react";
import { randColor } from "../../utilities/randcolor";
import BaseInfoCard from "./BaseInfoCard";

export interface CourseInfoCardProps {
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
  /**
   * 課程背景圖
   */
  backgroundImage: string;
}

/**
 * 課程資訊標籤。目前是用在 `CourseInfoCard` 裡面，用來顯示標籤。
 */
export function CourseInfoTags({ children: tag }: { children: string }) {
  return (
    <div
      className={`w-12 h-6 rounded-2xl bg-${randColor()}-800 text-white text-sm place-center`}
    >
      <div>{tag}</div>
    </div>
  );
}

/**
 * 課程資訊卡。目前是用在 `/course/index` 展示可選課程的地方。
 */
export default function CourseInfoCard({
  title,
  desc,
  tags,
  backgroundImage,
}: CourseInfoCardProps) {
  return (
    <BaseInfoCard
      className="bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="p-8 bg-black bg-opacity-60 text-white flex items-end content-end w-full h-full">
        <div>
          <div className="mb-1">
            {tags.map((tag) => (
              <CourseInfoTags key={`${title}-tag-${tag}`}>{tag}</CourseInfoTags>
            ))}
          </div>
          <div className="text-xl font-bold mb-1">{title}</div>
          <div className="text-sm">{desc}</div>
        </div>
      </div>
    </BaseInfoCard>
  );
}
