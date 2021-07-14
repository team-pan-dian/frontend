import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { BasePageProps } from "./BasePage";
import BasePage from "./BasePage";

export default {
  title: "Page/BasePage",
  component: BasePage,
} as Meta;

export const BasePageExample: Story<BasePageProps> = ({
  id,
  title,
  full,
  navbar,
  children = <p>Hello</p>,
}: BasePageProps) => (
  <BasePage id={id} title={title} full={full} navbar={navbar}>
    {children}
  </BasePage>
);

BasePageExample.args = {
  id: "base-page-example",
  title: "Base Page Example",
};
