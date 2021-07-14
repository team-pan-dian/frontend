import React from "react";
import SearchBar from "../Input/SearchBar";

export interface SearchSelectCourseProps {
  searchValue: string;
  searchOnChange: (newSearchValue: string) => void;
}

export default function SearchSelectCourse({
  searchValue,
  searchOnChange,
}: SearchSelectCourseProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold mb-2">選擇或搜尋您感興趣的課程</div>
      <SearchBar value={searchValue} onChange={searchOnChange} />
    </div>
  );
}
