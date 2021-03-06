import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { CourseInfoCardProps } from "./CourseInfoCard";
import CourseInfoCard from "./CourseInfoCard";

export default {
  title: "Card/CourseInfoCard",
  component: CourseInfoCard,
} as Meta;

const Template: Story<CourseInfoCardProps> = ({
  id,
  title,
  desc,
  tags,
  backgroundImage,
}: CourseInfoCardProps) => (
  <div className="grid">
    <CourseInfoCard
      id={id}
      title={title}
      desc={desc}
      tags={tags}
      backgroundImage={backgroundImage}
    />
  </div>
);

export const DarkSingleTag = Template.bind({});
DarkSingleTag.args = {
  id: "dark-single-tag",
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一遍成為資安高手。",
  tags: ["資訊"],
  // source: https://unsplash.com/photos/4hbJ-eymZ1o, thanks to Florian Olivo :)
  backgroundImage:
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};

export const DarkMultipleTags = Template.bind({});
DarkMultipleTags.args = {
  id: "dark-multiple-tag",
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一遍成為資安高手。",
  tags: ["資訊", "資安", "駭客"],
  // source: https://unsplash.com/photos/4hbJ-eymZ1o, thanks to Florian Olivo :)
  backgroundImage:
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};

export const LightSingleTag = Template.bind({});
LightSingleTag.args = {
  id: "light-single-tag",
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一遍成為資安高手。",
  tags: ["資訊"],
  // source: https://unsplash.com/photos/fIq0tET6llw, thanks to Diego PH :)
  backgroundImage:
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
};

export const LightMultipleTags = Template.bind({});
LightMultipleTags.args = {
  id: "light-multiple-tag",
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一遍成為資安高手。",
  tags: ["資訊", "資安", "駭客"],
  // source: https://unsplash.com/photos/fIq0tET6llw, thanks to Diego PH :)
  backgroundImage:
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
};
