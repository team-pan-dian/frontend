import React from "react";
import BaseButton from "./BaseButton";

export interface RefreshButtonProps {
  className?: string;
}

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
