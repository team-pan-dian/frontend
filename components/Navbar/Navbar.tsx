import React from "react";
import BaseButton from "../Buttons/BaseButton";

export default function Navbar() {
  return (
    <div className="absolute w-screen p-3 text-white standard-color bg-opacity-5">
      <div className="flex justify-between justify-items-end items-center">
        <div className="mix-blend-difference">Demotion</div>
        <BaseButton className="min-w-12 border-white mix-blend-difference">
          登出
        </BaseButton>
      </div>
    </div>
  );
}
