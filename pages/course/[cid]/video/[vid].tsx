import type { GetServerSideProps } from "next";
import React from "react";
import BasePage from "../../../../components/Page/BasePage";

export interface CourseVideoPlayerProps {
  courseName: string;
  videoName: string;
  courseId: string;
  videoUrl: string;
}

export default function CourseVideoPlayer({
  courseName,
  videoName,
  // courseId,
  videoUrl,
}: CourseVideoPlayerProps) {
  return (
    <BasePage
      id="course-video-player"
      title={`${courseName} - ${videoName}`}
      full
      navbar={false}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video className="w-screen h-screen" src={videoUrl} controls autoPlay>
        ${courseName} - ${videoName}
      </video>
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps<CourseVideoPlayerProps> =
  async () => ({
    props: {
      courseName: "沒有駭客學校，但你可以自學。",
      videoName: "怎麼配置環境？",
      courseId: "mwoga-15bh3va",
      // thanks to https://samplelib.com/sample-mp4.html!
      videoUrl: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
  });
