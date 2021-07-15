import React from "react";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import {
  CourseInfoJumbotron,
  CourseInfoJumbotronClassName,
  CourseInfoJumbotronStyle,
} from "../../../components/Jumbotron/CourseInfoJumbotron";
import HeaderBasePage from "../../../components/Page/HeaderBasePage";
import BaseInfoCard from "../../../components/Card/BaseInfoCard";
import BaseCardsGroup from "../../../components/Card/BaseCardsGroup";
import BaseButton from "../../../components/Buttons/BaseButton";
import useCourseData from "../../../components/Fetcher/useCourseData";
import { CommaTagStringToTags } from "../../../components/Combination/CourseInfoUtil";
import Message, { MessageLevel } from "../../../components/Combination/Message";

export interface ChooseLessonProps {
  cid: string;
}

export default function ChooseLesson({ cid }: ChooseLessonProps) {
  const { data, error } = useCourseData(cid);

  return (
    <HeaderBasePage
      id="choose-video"
      title="選擇影片"
      full
      jumbotron={
        <CourseInfoJumbotron
          title={data?.data.name ?? "正在載入資料⋯⋯"}
          desc={data?.data.information ?? ""}
          tags={CommaTagStringToTags(data?.data.type ?? "")}
          videos={
            data?.data.videoList.map((video) => ({
              cid,
              vid: video.id,
              url: video.fileName,
            })) ?? []
          }
        />
      }
      jumbotronStyle={CourseInfoJumbotronStyle(data?.data.img ?? "")}
      jumbotronClassName={CourseInfoJumbotronClassName}
    >
      <div className="flex justify-center justify-items-center">
        <main>
          {error && (
            <Message
              errorMessage={`無法取得課程資料：${error.message}`}
              mode={MessageLevel.ERROR}
            />
          )}
          <BaseCardsGroup>
            {data?.data.videoList.map(({ id: vid, name, information }, key) => (
              <BaseInfoCard
                className="flex flex-col justify-center justify-items-center p-6"
                key={`course-video-${vid}`}
              >
                <div className="mb-2">
                  <div className="font-light text-sm">CH{key + 1}</div>
                  <div className="text-xl font-bold">{name}</div>
                  <div>{information}</div>
                </div>
                <div>
                  <Link href={`/course/${cid}/video/${vid}`}>
                    <BaseButton solid>播放</BaseButton>
                  </Link>
                </div>
              </BaseInfoCard>
            ))}
          </BaseCardsGroup>
        </main>
      </div>
    </HeaderBasePage>
  );
}

export const getServerSideProps: GetServerSideProps<ChooseLessonProps> =
  async ({ query: { cid } }) => ({
    props: {
      cid: typeof cid === "string" ? cid : "unknown",
    },
  });
