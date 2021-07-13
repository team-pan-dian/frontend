import type { Meta, Story } from "@storybook/react";
import React from "react";
import type { BaseCardsGroupProps } from "./BaseCardsGroup";
import BaseCardsGroup from "./BaseCardsGroup";
import CourseInfoCard from "./CourseInfoCard";
import { ExampleCard1 } from "./CourseInfoCard.stories";

export default {
  title: "Card/BaseCardsGroup",
  component: BaseCardsGroup,
  subcomponents: { CourseInfoCard },
} as Meta;

const Template: Story<BaseCardsGroupProps> = ({
  children,
}: BaseCardsGroupProps) => <BaseCardsGroup>{children}</BaseCardsGroup>;

const ExampleCard = () => {
  if (ExampleCard1.args) {
    const { title, desc, tags, backgroundImage } = ExampleCard1.args;
    if (title && desc && tags && backgroundImage)
      return (
        <ExampleCard1
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
      {new Array(30).fill("card").map((data, cardId) => (
        <ExampleCard key={`${data}-${cardId - 1}`} />
      ))}
    </>
  ),
};
