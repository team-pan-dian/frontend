import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { HeaderBasePageProps } from "./HeaderBasePage";
import HeaderBasePage from "./HeaderBasePage";

export default {
  title: "Page/HeaderBasePage",
  component: HeaderBasePage,
} as Meta;

export const HeaderBasePageExample: Story<HeaderBasePageProps> = ({
  id,
  title,
  children,
  full,
  header,
}: HeaderBasePageProps) => (
  <HeaderBasePage id={id} title={title} full={full} header={header}>
    {children}
  </HeaderBasePage>
);
HeaderBasePageExample.args = {
  id: "base-header-base-page-example",
  title: "Header Base Page Example",
  children: <p>Hello</p>,
  full: false,
  header: <p>aaa</p>,
};
