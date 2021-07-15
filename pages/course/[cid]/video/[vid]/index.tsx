import type { GetServerSideProps } from "next";
import React, { useState } from "react";
import BasePage from "../../../../../components/Page/BasePage";
import HeaderBar from "../../../../../components/Video/HeaderBar";
import useVideoData from "../../../../../components/Fetcher/useVideoData";
import Message, {
  MessageLevel,
} from "../../../../../components/Combination/Message";

export interface CourseVideoPlayerProps {
  cid: string;
  vid: string;
}

export default function CourseVideoPlayer({
  cid,
  vid,
}: CourseVideoPlayerProps) {
  const { data, error } = useVideoData(cid, vid);
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
    <BasePage id="course-video-player" title="播放器" full navbar={false}>
      <HeaderBar
        persistentShow={showHeaderBar}
        courseId={cid}
        videoName={data?.data.name ?? "正在取得影片資訊⋯⋯"}
      />
      {error && (
        <div className="m-10 place-center">
          <Message
            errorMessage={`無法播放影片：${error.message}`}
            mode={MessageLevel.ERROR}
          />
        </div>
      )}
      {data && (
        // TODO: support caption
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          className="w-screen h-screen bg-black"
          src={data.data.fileName}
          controls
          autoPlay
          onMouseMove={onFocus}
          onFocus={onFocus}
          onMouseOut={onBlur}
          onBlur={onBlur}
        >
          播放 {cid} - {vid} ({data.data.name})
        </video>
      )}
    </BasePage>
  );
}

export const getServerSideProps: GetServerSideProps<CourseVideoPlayerProps> =
  async ({ query: { cid, vid } }) => ({
    props: {
      cid: typeof cid === "string" ? cid : "?",
      vid: typeof vid === "string" ? vid : "?",
    },
  });
