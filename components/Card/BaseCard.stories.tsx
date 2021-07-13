import type { Meta, Story } from "@storybook/react";
import React from "react";
import type { BaseCardProps } from "./BaseCard";
import BaseCardComponent from "./BaseCard";

export default {
  title: "Card/BaseCard",
  component: BaseCardComponent,
} as Meta;

const Template: Story<BaseCardProps> = ({ children }: BaseCardProps) => (
  <BaseCardComponent>{children}</BaseCardComponent>
);

export const WithPlainText = Template.bind({});
WithPlainText.args = {
  children: "Hi!",
};

export const WithReactNode = Template.bind({});
WithReactNode.args = {
  children: <div className="place-center w-full h-full p-16">我很可愛！</div>,
};
