import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { CourseInfoProps } from "./CourseInfo";
import CourseInfo from "./CourseInfo";

export default {
  title: "Combination/CourseInfo",
  component: CourseInfo,
} as Meta;

const Template: Story<CourseInfoProps> = ({
  title,
  desc,
  tags,
}: CourseInfoProps) => <CourseInfo title={title} desc={desc} tags={tags} />;

export const SingleTag = Template.bind({});
SingleTag.args = {
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一遍成為資安高手。",
  tags: ["資訊"],
};

export const MultipleTag = Template.bind({});
MultipleTag.args = {
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一遍成為資安高手。",
  tags: ["資訊", "資安", "駭客"],
};
