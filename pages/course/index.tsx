import React from "react";
import HeaderBasePage from "../../components/Page/HeaderBasePage";
import CourseInfoCard from "../../components/Card/CourseInfoCard";
import BaseCardsGroup from "../../components/Card/BaseCardsGroup";
import SearchSelectCourse from "../../components/Jumbotron/SelectSearchCourse";

export default function ChooseCourse() {
  return (
    <HeaderBasePage
      id="choose-course"
      title="選擇課程"
      jumbotron={<SearchSelectCourse />}
    >
      <BaseCardsGroup>
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
      </BaseCardsGroup>
    </HeaderBasePage>
  );
}
