import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { VideoBundlePrefetchButtonProps } from "./VideoBundlePrefetchButton";
import VideoBundlePrefetchButton from "./VideoBundlePrefetchButton";

export default {
  title: "OfflineVideo/VideoBundlePrefetchButton",
  component: VideoBundlePrefetchButton,
} as Meta;

const Template: Story<VideoBundlePrefetchButtonProps> = ({
  videos,
}: VideoBundlePrefetchButtonProps) => (
  <VideoBundlePrefetchButton videos={videos} />
);

export const SingleVideo = Template.bind({});
SingleVideo.args = {
  videos: [
    {
      url: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
  ],
};

export const MultipleVideo = Template.bind({});
MultipleVideo.args = {
  videos: [
    {
      url: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
    {
      url: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
    {
      url: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
    {
      url: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
    {
      url: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
    {
      url: "https://download.samplelib.com/mp4/sample-15s.mp4",
    },
  ],
};
