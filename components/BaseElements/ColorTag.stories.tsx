import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { ColorTagProps } from "./ColorTag";
import { ColorTag } from "./ColorTag";

export default {
  title: "BaseElements/ColorTag",
  component: ColorTag,
} as Meta;

const Template: Story<ColorTagProps> = ({ children }: ColorTagProps) => (
  <ColorTag>{children}</ColorTag>
);

export const ShortTagExample = Template.bind({});
ShortTagExample.args = {
  children: "資訊",
};

export const LongTagExample = Template.bind({});
LongTagExample.args = {
  children: "資訊資訊資訊資訊資訊資訊資訊資訊資訊資訊資訊資訊資訊資訊",
};
