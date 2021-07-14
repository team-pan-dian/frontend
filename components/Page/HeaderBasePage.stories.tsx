import React from "react";
import type { Meta, Story } from "@storybook/react";
import { Example } from "../Card/BaseCardsGroup.stories";
import SelectSearchCourse from "../Jumbotron/SelectSearchCourse";
import {
  CourseInfoJumbotron,
  CourseInfoJumbotronClassName,
  CourseInfoJumbotronStyle,
} from "../Jumbotron/CourseInfoJumbotron";
import type { HeaderBasePageProps } from "./HeaderBasePage";
import HeaderBasePage from "./HeaderBasePage";

export default {
  title: "Page/HeaderBasePage",
  component: HeaderBasePage,
} as Meta;

const Template: Story<HeaderBasePageProps> = ({
  id,
  title,
  children,
  full,
  jumbotron,
  jumbotronClassName,
  jumbotronStyle,
}: HeaderBasePageProps) => (
  <HeaderBasePage
    id={id}
    title={title}
    full={full}
    jumbotron={jumbotron}
    jumbotronClassName={jumbotronClassName}
    jumbotronStyle={jumbotronStyle}
  >
    {children}
  </HeaderBasePage>
);

const ExampleContent = () => {
  if (Example.args) {
    const { children } = Example.args;
    return <Example>{children}</Example>;
  }
  return null;
};

export const HeaderBasePageExample1 = Template.bind({});
HeaderBasePageExample1.args = {
  id: "base-header-base-page-example",
  title: "Header Base Page Example",
  children: <ExampleContent />,
  full: false,
  jumbotron: <SelectSearchCourse />,
};

export const HeaderBasePageExample2 = Template.bind({});
HeaderBasePageExample2.args = {
  id: "base-header-base-page-example",
  title: "Header Base Page Example",
  children: <ExampleContent />,
  full: false,
  jumbotron: (
    <CourseInfoJumbotron
      title="沒有駭客學校，但你可以自學。"
      desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
      tags={["資訊"]}
    />
  ),
  jumbotronClassName: CourseInfoJumbotronClassName,
  jumbotronStyle:
    // source: https://unsplash.com/photos/4hbJ-eymZ1o, thanks to Florian Olivo :)
    CourseInfoJumbotronStyle(
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ),
};
