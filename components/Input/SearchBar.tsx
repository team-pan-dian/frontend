import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BaseInput from "./BaseInput";

export interface SearchBarProps {
  /**
   * 搜尋框的值。
   */
  value: string;
  /**
   * 當搜尋框內文變更時觸發。
   */
  onChange: (newValue: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center space-x-2">
      <BaseInput id="search-bar" value={value} onChange={onChange} />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
