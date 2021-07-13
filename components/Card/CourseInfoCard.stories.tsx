import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { CourseInfoCardProps } from "./CourseInfoCard";
import CourseInfoCard from "./CourseInfoCard";

export default {
  title: "Card/CourseInfoCard",
  component: CourseInfoCard,
} as Meta;

const Template: Story<CourseInfoCardProps> = ({
  title,
  desc,
  tags,
  backgroundImage,
}: CourseInfoCardProps) => (
  <div className="grid">
    <CourseInfoCard
      title={title}
      desc={desc}
      tags={tags}
      backgroundImage={backgroundImage}
    />
  </div>
);

export const ExampleCard1 = Template.bind({});
ExampleCard1.args = {
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一遍成為資安高手。",
  tags: ["資訊"],
  // source: https://unsplash.com/photos/4hbJ-eymZ1o, thanks to Florian Olivo :)
  backgroundImage:
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};
