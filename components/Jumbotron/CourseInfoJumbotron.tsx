import type { ReactNode } from "react";
import React from "react";
import CourseInfo from "../Combination/CourseInfo";
import VideoBundlePrefetchButton from "../OfflineVideo/VideoBundlePrefetchButton";
import type { VideoInfo } from "../OfflineVideo/cacheVideo";

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
  /**
   * 課程內含影片
   *
   * 用來 Prefetch。
   */
  videos: VideoInfo[];
}

/**
 * 用在課程專屬頁面的開頭 Jumbotron。
 */
export function CourseInfoJumbotron({
  title,
  desc,
  tags,
  videos,
}: CourseInfoJumbotronProps) {
  return (
    <div className="grid grid-cols-2 justify-between items-end text-white w-full h-full">
      <div>
        <CourseInfo title={title} desc={desc} tags={tags} />
      </div>
      <div className="justify-self-end">
        <VideoBundlePrefetchButton videos={videos} />
      </div>
    </div>
  );
}

export const CourseInfoJumbotronClassName =
  "pb-6 pt-36 px-6 flex items-end justify-left bg-blend-darken bg-cover";
export const CourseInfoJumbotronStyle = (backgroundImage: string) =>
  ({
    backgroundImage: `linear-gradient(to bottom, transparent, #000), url('${backgroundImage}')`,
  } as React.CSSProperties);
