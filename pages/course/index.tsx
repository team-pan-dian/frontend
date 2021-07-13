import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HeaderBasePage from "../../components/Page/HeaderBasePage";
import BaseInput from "../../components/BaseElements/BaseInput";
import CourseInfoCard from "../../components/Card/CourseInfoCard";

export default function ChooseCourse() {
  return (
    <HeaderBasePage
      id="choose-course"
      title="選擇課程"
      header={
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold mb-2">選擇或搜尋您感興趣的課程</div>
          <div className="flex items-center space-x-2">
            <BaseInput id="search-bar" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      }
    >
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 m-6 justify-center justify-items-center">
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />{" "}
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />{" "}
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />{" "}
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />{" "}
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />{" "}
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />{" "}
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />{" "}
        <CourseInfoCard
          title="沒有駭客學校，但你可以自學。"
          desc="這堂課程可以讓您從零基礎，搖身一遍成為資安高手。"
          tags={["資訊"]}
          backgroundImage="/hacker.jpg"
        />
      </div>
    </HeaderBasePage>
  );
}
