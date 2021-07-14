import type { Meta, Story } from "@storybook/react";
import React from "react";
import type { BaseCardsGroupProps } from "./BaseCardsGroup";
import BaseCardsGroup from "./BaseCardsGroup";
import CourseInfoCard from "./CourseInfoCard";
import { DarkSingleTag, LightMultipleTags } from "./CourseInfoCard.stories";

export default {
  title: "Card/BaseCardsGroup",
  component: BaseCardsGroup,
  subcomponents: { CourseInfoCard },
} as Meta;

const Template: Story<BaseCardsGroupProps> = ({
  children,
}: BaseCardsGroupProps) => <BaseCardsGroup>{children}</BaseCardsGroup>;

const DarkSingleTagCard = () => {
  if (DarkSingleTag.args) {
    const { title, desc, tags, backgroundImage } = DarkSingleTag.args;
    if (title && desc && tags && backgroundImage)
      return (
        <DarkSingleTag
          title={title}
          desc={desc}
          tags={tags}
          backgroundImage={backgroundImage}
        />
      );
  }

  return null;
};

const LightMultipleTagsCard = () => {
  if (LightMultipleTags.args) {
    const { title, desc, tags, backgroundImage } = LightMultipleTags.args;
    if (title && desc && tags && backgroundImage)
      return (
        <DarkSingleTag
          title={title}
          desc={desc}
          tags={tags}
          backgroundImage={backgroundImage}
        />
      );
  }

  return null;
};

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      {new Array(15).fill("card").map((data, cardId) => (
        <DarkSingleTagCard key={`${data}-${cardId - 1}`} />
      ))}
      {new Array(15).fill("card").map((data, cardId) => (
        <LightMultipleTagsCard key={`${data}-${cardId - 1}`} />
      ))}
    </>
  ),
};
