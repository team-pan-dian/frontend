import type { ReactNode } from "react";
import React from "react";

export interface JumbotronBaseProps {
  /**
   * 頁面 Jumbotron 部分
   *
   * 可放入 React 元件。
   */
  children: ReactNode;
  /**
   * 頁面 Jumbotron 的 Class Name
   *
   * @default py-12 pt-16 px-8 standard-color place-center
   */
  jumbotronClassName?: string;
  /**
   * 頁面 Jumbotron 的 Style
   */
  jumbotronStyle?: React.CSSProperties;
}

/**
 * 任何 Jumbotron 的基礎。
 */
export default function JumbotronBase({
  children: jumbotron,
  jumbotronClassName = "py-12 pt-16 px-8 standard-color place-center",
  jumbotronStyle = {},
}: JumbotronBaseProps) {
  return (
    <section className={jumbotronClassName} style={jumbotronStyle}>
      {jumbotron}
    </section>
  );
}
