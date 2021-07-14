import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { MessageProps } from "./Message";
import Message, { MessageLevel } from "./Message";

export default {
  title: "Combination/Message",
  component: Message,
} as Meta;

const Template: Story<MessageProps> = ({
  errorMessage,
  mode,
}: MessageProps) => <Message errorMessage={errorMessage} mode={mode} />;

export const InfoMessage = Template.bind({});
InfoMessage.args = {
  errorMessage: "這是資訊訊息",
  mode: MessageLevel.INFO,
};

export const WarnMessage = Template.bind({});
WarnMessage.args = {
  errorMessage: "這是警告訊息",
  mode: MessageLevel.WARN,
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  errorMessage: "這是錯誤訊息",
  mode: MessageLevel.ERROR,
};
