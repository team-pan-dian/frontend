import type { ReactNode } from "react";
import React from "react";

export interface BaseCardsGroupProps {
  /**
   * 卡片
   */
  children: ReactNode;
}

/**
 * 適用於基礎卡片 (`BaseCard.tsx`) 的群組組件。
 *
 * 這個群組本質上就是會根據螢幕大小調整的 grid，
 * 小螢幕每列顯示一張，中螢幕每列顯示兩張，
 * 大螢幕每列顯示三張，依此類推。
 *
 * 詳細資訊建議查看程式碼並參考
 * Tailwind CSS 的 screen 定義。
 */
export default function BaseCardsGroup({
  children: cards,
}: BaseCardsGroupProps) {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 m-6 justify-center justify-items-center">
      {cards}
    </div>
  );
}
