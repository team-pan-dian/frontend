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
  jumbotron,
  jumbotronClassName = "py-12 pt-16 px-8 standard-color place-center",
  jumbotronStyle = {},
}: HeaderBasePageProps) {
  return (
    <BasePage id={id} title={title} full={full}>
      <section className={jumbotronClassName} style={jumbotronStyle}>
        {jumbotron}
      </section>
      {children}
    </BasePage>
  );
}
