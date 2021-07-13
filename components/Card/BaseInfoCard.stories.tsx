import type { Meta, Story } from "@storybook/react";
import React from "react";
import type { BaseInfoCardProps } from "./BaseInfoCard";
import BaseInfoCardComponent from "./BaseInfoCard";

export default {
  title: "Card/BaseInfoCard",
  component: BaseInfoCardComponent,
} as Meta;

const Template: Story<BaseInfoCardProps> = ({
  className,
  style,
  children,
}: BaseInfoCardProps) => (
  <BaseInfoCardComponent className={className} style={style}>
    {children}
  </BaseInfoCardComponent>
);

export const WithPlainText = Template.bind({});
WithPlainText.args = {
  children: "Hi!",
};

export const WithReactNode = Template.bind({});
WithReactNode.args = {
  children: <div className="place-center w-full h-full p-16">我很可愛！</div>,
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  children: <div className="place-center w-full h-full p-16">我很可愛！</div>,
  className: "m-16",
};
