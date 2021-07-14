import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BaseInput from "../BaseElements/BaseInput";

export default function SearchSelectCourse() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold mb-2">選擇或搜尋您感興趣的課程</div>
      <div className="flex items-center space-x-2">
        <BaseInput id="search-bar" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}
