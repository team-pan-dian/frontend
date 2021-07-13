import React from "react";
import type { Meta, Story } from "@storybook/react";
import NavbarC from "./Navbar";

export default {
  title: "Navbar/Navbar",
  component: NavbarC,
} as Meta;

export const Navbar: Story = () => <NavbarC />;
