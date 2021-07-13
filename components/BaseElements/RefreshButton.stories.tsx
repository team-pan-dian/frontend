import type { Meta } from "@storybook/react";
import React from "react";

import type { RefreshButtonProps } from "./RefreshButton";
import RefreshButtonComponent from "./RefreshButton";

export default {
  title: "BaseElements/RefreshButton",
  component: RefreshButtonComponent,
} as Meta;

export const RefreshButton = ({ className }: RefreshButtonProps) => (
  <RefreshButtonComponent className={className} />
);
