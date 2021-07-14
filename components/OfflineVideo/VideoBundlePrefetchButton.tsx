import React, { useState } from "react";
import {
  faArrowDown,
  faCheck,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BaseButton from "../Buttons/BaseButton";
import type { VideoInfo } from "./cacheVideo";
import { PrefetchVideoGroup } from "./cacheVideo";

export interface VideoBundlePrefetchButtonProps {
  videos: VideoInfo[];
}

enum State {
  NOT_SYNCED,
  SYNCING,
  SYNCED,
}

export default function VideoBundlePrefetchButton({
  videos,
}: VideoBundlePrefetchButtonProps) {
  const [currentState, setCurrentState] = useState<State>(State.NOT_SYNCED);
  const triggerDownload = async () => {
    setCurrentState(State.SYNCING);
    try {
      await PrefetchVideoGroup(videos);
      setCurrentState(State.SYNCED);
    } catch (e) {
      console.error(e);
      setCurrentState(State.NOT_SYNCED);
    }
  };

  switch (currentState) {
    case State.NOT_SYNCED:
      return (
        <BaseButton solid onClick={triggerDownload}>
          <FontAwesomeIcon icon={faArrowDown} /> 下載影片
        </BaseButton>
      );
    case State.SYNCING:
      return (
        <BaseButton solid className="bg-green-800" disabled>
          <FontAwesomeIcon icon={faSync} />
        </BaseButton>
      );
    case State.SYNCED:
      return (
        <BaseButton solid className="bg-green-800" disabled>
          <FontAwesomeIcon icon={faCheck} />
        </BaseButton>
      );
    default:
      return null;
  }
}
