import type { Meta, Story } from "@storybook/react";
import React from "react";
import type { SearchBarProps } from "./SearchBar";
import SearchBar from "./SearchBar";

export default {
  title: "Input/SearchBar",
  component: SearchBar,
} as Meta;

export const ExampleSearchBar: Story<SearchBarProps> = ({
  value,
  onChange,
}: SearchBarProps) => <SearchBar value={value} onChange={onChange} />;
ExampleSearchBar.args = {
  value: "哈囉！",
  onChange: () => null,
};
