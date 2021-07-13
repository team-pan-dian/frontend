import type { ReactNode } from "react";
import React from "react";
import BasePage from "./BasePage";

export interface HeaderBasePageProps {
  id: string;
  children: ReactNode;
  full?: boolean;
  title: string;
  header: ReactNode;
}

export default function HeaderBasePage({
  id,
  title,
  full,
  children,
  header,
}: HeaderBasePageProps) {
  return (
    <BasePage id={id} title={title} full={full}>
      <div className="p-8 standard-color place-center">{header}</div>
      {children}
    </BasePage>
  );
}
