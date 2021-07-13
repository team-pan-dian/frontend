import React from "react";
import type { ReactNode } from "react";
import BaseCard from "../Card/BaseCard";
import BasePage from "./BasePage";

export interface BasePageCardProps {
  id: string;
  children: ReactNode;
  title: string;
}

export default function BasePageCard({
  title,
  id,
  children,
}: BasePageCardProps) {
  return (
    <BasePage title={title} id={id}>
      <div className="flex content-center justify-center">
        <BaseCard>{children}</BaseCard>
      </div>
    </BasePage>
  );
}
