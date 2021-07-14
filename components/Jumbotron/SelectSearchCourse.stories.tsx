import React from "react";
import type { Meta, Story } from "@storybook/react";
import SelectSearchCourse from "./SelectSearchCourse";
import JumbotronBase from "./JumbotronBase";

export default {
  title: "Jumbotron/SelectSearchCourse",
  component: SelectSearchCourse,
  subcomponents: {
    JumbotronBase,
  },
} as Meta;

export const SelectSearchCourseExample: Story = () => (
  <JumbotronBase>
    <SelectSearchCourse />
  </JumbotronBase>
);
