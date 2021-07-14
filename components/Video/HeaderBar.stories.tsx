import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { HeaderBarProps } from "./HeaderBar";
import HeaderBar from "./HeaderBar";

export default {
  title: "Video/HeaderBar",
  component: HeaderBar,
} as Meta;

const Template: Story<HeaderBarProps> = ({
  persistentShow,
  courseId,
  videoName,
  videoUrl,
}: HeaderBarProps) => (
  <HeaderBar
    persistentShow={persistentShow}
    courseId={courseId}
    videoName={videoName}
    videoUrl={videoUrl}
  />
);

export const NormalForm = Template.bind({});
NormalForm.args = {
  videoName: "教你怎麼睡覺ww",
  videoUrl: "/somewhere.mp4",
  courseId: "human-body-tutorial",
};

export const WhenEnablePersistentShow = Template.bind({});
WhenEnablePersistentShow.args = {
  videoName: "教你怎麼睡覺ww",
  videoUrl: "/somewhere.mp4",
  courseId: "human-body-tutorial",
  persistentShow: true,
};
