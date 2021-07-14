import React, { useEffect, useState } from "react";
import {
  faArrowDown,
  faSync,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseButton from "../Buttons/BaseButton";
import type { VideoInfo } from "./cacheVideo";
import {
  ClearSpecifiedCourseVideo,
  HasSpecifiedCourseData,
  PrefetchVideoGroup,
} from "./cacheVideo";

export interface VideoBundleDownloadButtonProps {
  courseId: string;
  videos: VideoInfo[];
}

enum State {
  NOT_SURE = -1,
  NOT_DOWNLOADED,
  DOWNLOADING,
  DOWNLOADED,
}

export default function VideoBundleDownloadButton({
  courseId,
  videos,
}: VideoBundleDownloadButtonProps) {
  const [currentState, setCurrentState] = useState<State>(State.NOT_SURE);
  const triggerDownload = async () => {
    setCurrentState(State.DOWNLOADING);
    await PrefetchVideoGroup(courseId, videos);
    setCurrentState(State.DOWNLOADED);
  };
  const triggerRemove = async () => {
    await ClearSpecifiedCourseVideo(courseId);
    setCurrentState(State.NOT_DOWNLOADED);
  };

  useEffect(() => {
    if (currentState === State.NOT_SURE) {
      void HasSpecifiedCourseData(courseId).then((status) => {
        if (status) {
          setCurrentState(State.DOWNLOADED);
        } else {
          setCurrentState(State.NOT_DOWNLOADED);
        }
      });
    }
  });

  switch (currentState) {
    case State.NOT_DOWNLOADED:
      return (
        <BaseButton solid onClick={triggerDownload}>
          <FontAwesomeIcon icon={faArrowDown} />
        </BaseButton>
      );
    case State.DOWNLOADING:
      return (
        <BaseButton solid className="bg-green-800" disabled>
          <FontAwesomeIcon icon={faSync} />
        </BaseButton>
      );
    case State.DOWNLOADED:
      return (
        <BaseButton solid className="bg-red-800" onClick={triggerRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </BaseButton>
      );
    case State.NOT_SURE:
    default:
      return null;
  }
}
