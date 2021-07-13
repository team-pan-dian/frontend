import type { ReactNode } from "react";
import React from "react";
import { randColor } from "../../utilities/randcolor";
import BaseInfoCard from "./BaseInfoCard";

export interface CourseInfoCardProps {
  title: ReactNode;
  desc: ReactNode;
  tags: string[];
  backgroundImage: string;
}

export function CourseInfoTags({ children: tag }: { children: string }) {
  return (
    <div
      className={`w-12 h-6 rounded-2xl bg-${randColor()}-800 text-white text-sm place-center`}
    >
      <div>{tag}</div>
    </div>
  );
}

export default function CourseInfoCard({
  title,
  desc,
  tags,
  backgroundImage,
}: CourseInfoCardProps) {
  return (
    <BaseInfoCard
      className="bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="p-8 bg-black bg-opacity-60 text-white flex items-end content-end w-full h-full">
        <div>
          <div className="mb-1">
            {tags.map((tag) => (
              <CourseInfoTags key={`${title}-tag-${tag}`}>{tag}</CourseInfoTags>
            ))}
          </div>
          <div className="text-xl font-bold mb-1">{title}</div>
          <div className="text-sm">{desc}</div>
        </div>
      </div>
    </BaseInfoCard>
  );
}