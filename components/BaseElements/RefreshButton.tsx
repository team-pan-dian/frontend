import React from "react";
import BaseButton from "./BaseButton";

export interface RefreshButtonProps {
  className?: string;
}

/**
 * 呼叫 `location.reload()` 的重新整理按鈕。等同於 Command-R 和 F5。
 */
export default function RefreshButton({ className = "" }: RefreshButtonProps) {
  return (
    <BaseButton
      className={className}
      solid
      onClick={() => {
        window.location.reload();
      }}
    >
      重新整理
    </BaseButton>
  );
}

RefreshButton.defaultProps = {
  className: "",
};
