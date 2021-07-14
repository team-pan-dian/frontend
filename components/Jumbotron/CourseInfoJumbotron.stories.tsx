import React from "react";
import type { Meta, Story } from "@storybook/react";
import JumbotronBase from "./JumbotronBase";
import type { CourseInfoJumbotronProps } from "./CourseInfoJumbotron";
import {
  CourseInfoJumbotronStyle,
  CourseInfoJumbotron,
  CourseInfoJumbotronClassName,
} from "./CourseInfoJumbotron";

export default {
  title: "Jumbotron/CourseInfoJumbotron",
  component: CourseInfoJumbotron,
  subcomponents: {
    JumbotronBase,
  },
} as Meta;

export const DarkSingleTag: Story<CourseInfoJumbotronProps> = ({
  title,
  desc,
  tags,
}: CourseInfoJumbotronProps) => (
  <JumbotronBase
    className={CourseInfoJumbotronClassName}
    style={CourseInfoJumbotronStyle(
      // source: https://unsplash.com/photos/4hbJ-eymZ1o, thanks to Florian Olivo :)
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    )}
  >
    <CourseInfoJumbotron title={title} desc={desc} tags={tags} />
  </JumbotronBase>
);
DarkSingleTag.args = {
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一變成為資安高手。",
  tags: ["資訊"],
};

export const DarkMultipleTags: Story<CourseInfoJumbotronProps> = ({
  title,
  desc,
  tags,
}: CourseInfoJumbotronProps) => (
  <JumbotronBase
    className={CourseInfoJumbotronClassName}
    style={CourseInfoJumbotronStyle(
      // source: https://unsplash.com/photos/4hbJ-eymZ1o, thanks to Florian Olivo :)
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    )}
  >
    <CourseInfoJumbotron title={title} desc={desc} tags={tags} />
  </JumbotronBase>
);
DarkMultipleTags.args = {
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一變成為資安高手。",
  tags: ["資訊", "資安", "駭客"],
};

export const LightSingleTag: Story<CourseInfoJumbotronProps> = ({
  title,
  desc,
  tags,
}: CourseInfoJumbotronProps) => (
  <JumbotronBase
    className={CourseInfoJumbotronClassName}
    style={CourseInfoJumbotronStyle(
      // source: https://unsplash.com/photos/fIq0tET6llw, thanks to Diego PH :)
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    )}
  >
    <CourseInfoJumbotron title={title} desc={desc} tags={tags} />
  </JumbotronBase>
);
LightSingleTag.args = {
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一變成為資安高手。",
  tags: ["資訊"],
};

export const LightMultipleTags: Story<CourseInfoJumbotronProps> = ({
  title,
  desc,
  tags,
}: CourseInfoJumbotronProps) => (
  <JumbotronBase
    className={CourseInfoJumbotronClassName}
    style={CourseInfoJumbotronStyle(
      // source: https://unsplash.com/photos/fIq0tET6llw, thanks to Diego PH :)
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    )}
  >
    <CourseInfoJumbotron title={title} desc={desc} tags={tags} />
  </JumbotronBase>
);
LightMultipleTags.args = {
  title: "沒有駭客學校，但你可以自學。",
  desc: "這堂課程可以讓您從零基礎，搖身一變成為資安高手。",
  tags: ["資訊", "資安", "駭客"],
};
