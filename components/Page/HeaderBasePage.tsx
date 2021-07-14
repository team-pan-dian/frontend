import type { ReactNode } from "react";
import React from "react";
import JumbotronBase from "../Jumbotron/JumbotronBase";
import BasePage from "./BasePage";

export interface HeaderBasePageProps {
  /**
   * 頁面 ID
   */
  id: string;
  /**
   * 頁面內容
   */
  children: ReactNode;
  /**
   * 是否將頁面展開到螢幕大小？
   *
   * 內部實作：`w-screen h-screen`
   */
  full?: boolean;
  /**
   * 頁面標題
   */
  title: string;
  /**
   * 頁面 Jumbotron 部分
   *
   * **注意：**裡面不要再包一層 `JumbotronBase`。
   *
   * @see JumbotronBase.children
   */
  jumbotron: ReactNode;
  /**
   * 頁面 Jumbotron 的 Class Name
   *
   * @see JumbotronBase.className
   */
  jumbotronClassName?: string;
  /**
   * 頁面 Jumbotron 的 Style
   *
   * @see JumbotronBase.style
   */
  jumbotronStyle?: React.CSSProperties;
}

/**
 * 有 Jumbotron 的基礎頁面。
 */
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
      <JumbotronBase className={jumbotronClassName} style={jumbotronStyle}>
        {jumbotron}
      </JumbotronBase>
      {children}
    </BasePage>
  );
}
