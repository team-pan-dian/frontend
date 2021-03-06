import type { ReactNode } from "react";
import React from "react";
import Link from "next/link";
import CourseInfo from "../Combination/CourseInfo";
import BaseInfoCard from "./BaseInfoCard";

export interface CourseInfoCardProps {
  /**
   * 課程 ID
   */
  id: string;
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
 * 課程資訊卡。目前是用在 `/course/index` 展示可選課程的地方。
 */
export default function CourseInfoCard({
  id,
  title,
  desc,
  tags,
  backgroundImage,
}: CourseInfoCardProps) {
  return (
    <BaseInfoCard
      className="bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, #000), url(${backgroundImage})`,
      }}
    >
      <Link href={`/course/${id}`}>
        <div className="p-8 text-white flex items-end content-end justify-items-left w-full h-full">
          <CourseInfo title={title} desc={desc} tags={tags} />
        </div>
      </Link>
    </BaseInfoCard>
  );
}
