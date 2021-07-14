import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import BaseButton from "../BaseElements/BaseButton";

export interface HeaderBarProps {
  /**
   * 課程 ID
   */
  courseId: string;
  /**
   * 影片名稱
   */
  videoName: string;
  /**
   * 影片 URL
   */
  videoUrl: string;
  /**
   * 是否持續顯示？
   */
  persistentShow?: boolean;
}

/**
 * 影片播放器的標頭列。
 */
export default function HeaderBar({
  persistentShow = false,
  videoName,
  videoUrl,
  courseId,
}: HeaderBarProps) {
  const router = useRouter();

  return (
    <div
      className={`flex justify-between navbar absolute left-0 top-0 p-4 w-screen ${
        persistentShow ? "opacity-90" : "opacity-0 hover:opacity-90"
      } transition-opacity z-50`}
      style={{
        background:
          "linear-gradient(180deg, rgba(50, 50, 50, 1) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="flex justify-start justify-items-start content-center items-center space-x-5 text-white">
        <div>
          <button
            type="button"
            onClick={() => router.push(`/course/${courseId}`)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="font-bold">{videoName}</div>
      </div>
      <div className="space-x-2">
        {/* <BaseButton className="bg-white text-black"> */}
        {/*  <FontAwesomeIcon icon={faStar} /> */}
        {/* </BaseButton> */}
        <a href={videoUrl} download={videoName}>
          <BaseButton className="text-white border-white">
            <FontAwesomeIcon icon={faArrowDown} />
          </BaseButton>
        </a>
      </div>
    </div>
  );
}
