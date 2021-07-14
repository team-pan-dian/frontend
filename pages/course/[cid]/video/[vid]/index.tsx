import type { GetServerSideProps } from "next";
import React, { useState } from "react";
import BasePage from "../../../../../components/Page/BasePage";
import HeaderBar from "../../../../../components/Video/HeaderBar";

export interface CourseVideoPlayerProps {
  courseName: string;
  videoName: string;
  courseId: string;
  videoUrl: string;
}

export default function CourseVideoPlayer({
  courseName,
  videoName,
  courseId,
  videoUrl,
}: CourseVideoPlayerProps) {
  const [showHeaderBar, setShowHeaderBar] = useState(false);
  const onFocus = () => {
    if (!showHeaderBar) {
      setShowHeaderBar(true);
      setTimeout(() => {
        setShowHeaderBar(false);
      }, 5000);
    }
  };
  const onBlur = () => {
    setShowHeaderBar(false);
  };

  return (
    <BasePage
      id="course-video-player"
      title={`${courseName} - ${videoName}`}
      full
      navbar={false}
    >
      <HeaderBar
        persistentShow={showHeaderBar}
        courseId={courseId}
        videoName={videoName}
      />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className="w-screen h-screen bg-black"
        src={videoUrl}
        controls
        autoPlay
        onMouseMove={onFocus}
        onFocus={onFocus}
        onMouseOut={onBlur}
        onBlur={onBlur}
      >
        {courseName} - {videoName}
      </video>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps<CourseVideoPlayerProps> =
  async ({ query: { cid } }) => ({
    props: {
      courseId: typeof cid === "string" ? cid : "?",
      courseName: "沒有駭客學校，但你可以自學。",
      videoName: "怎麼配置環境？",
      // thanks to https://samplelib.com/sample-mp4.html!
      videoUrl: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
  });
