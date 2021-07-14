import React, { useState } from "react";
import HeaderBasePage from "../../components/Page/HeaderBasePage";
import SearchSelectCourse from "../../components/Jumbotron/SelectSearchCourse";
import useCoursesList from "../../components/Fetcher/useCoursesList";
import Message, { MessageLevel } from "../../components/Combination/Message";
import BaseCardsGroup from "../../components/Card/BaseCardsGroup";
import CourseInfoCard from "../../components/Card/CourseInfoCard";
import { CommaTagStringToTags } from "../../components/Combination/CourseInfoUtil";

export default function ChooseCourse() {
  const [searchValue, setSearchValue] = useState("");
  const { data, error } = useCoursesList();

  return (
    <HeaderBasePage
      id="choose-course"
      title="選擇課程"
      jumbotron={
        <SearchSelectCourse
          searchValue={searchValue}
          searchOnChange={setSearchValue}
        />
      }
    >
      {error && (
        <Message
          errorMessage={`無法取得課程清單：${error.message}`}
          mode={MessageLevel.ERROR}
        />
      )}
      {data && (
        <BaseCardsGroup>
          {data.data
            .filter((course) => course.name.includes(searchValue))
            .map((course) => (
              <CourseInfoCard
                key={`course-${course.id}`}
                id={course.id}
                title={course.name}
                desc={course.information}
                tags={CommaTagStringToTags(course.type)}
                backgroundImage={course.img}
              />
            ))}
        </BaseCardsGroup>
      )}
    </HeaderBasePage>
  );
}
