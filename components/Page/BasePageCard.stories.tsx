import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { BasePageCardProps } from "./BasePageCard";
import BasePageCard from "./BasePageCard";

export default {
  title: "Page/BasePageCard",
  component: BasePageCard,
} as Meta;

export const BasePageCardExample: Story<BasePageCardProps> = ({
  id,
  title,
  children,
}: BasePageCardProps) => (
  <BasePageCard id={id} title={title}>
    {children}
  </BasePageCard>
);
BasePageCardExample.args = {
  id: "base-page-card-example",
  title: "Base Page Card Example",
  children: <p>Hello</p>,
};
