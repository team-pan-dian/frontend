import type { ReactNode } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faInfoCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export enum MessageLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

const MessageLevelClass: Record<MessageLevel, string> = {
  info: "bg-blue-500 text-white",
  warn: "bg-yellow-500 text-white",
  error: "bg-red-500 text-white",
};

const MessageLevelIcon: Record<MessageLevel, ReactNode> = {
  info: <FontAwesomeIcon icon={faInfoCircle} />,
  warn: <FontAwesomeIcon icon={faExclamationTriangle} />,
  error: <FontAwesomeIcon icon={faTimesCircle} />,
};

export interface MessageProps {
  errorMessage: string;
  mode: MessageLevel;
}

export default function Message({ errorMessage, mode }: MessageProps) {
  return (
    <div
      className={`flex w-full space-x-2 items-start p-4 ${MessageLevelClass[mode]}`}
    >
      <div>{MessageLevelIcon[mode]}</div>
      <div>{errorMessage}</div>
    </div>
  );
}
