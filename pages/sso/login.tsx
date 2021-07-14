import React from "react";
import BaseInput from "../../components/BaseElements/BaseInput";
import BaseButton from "../../components/Buttons/BaseButton";

export default function LoginPage() {
  return (
    <div
      className="m-0 w-screen h-screen place-center"
      style={{
        background: "url('https://source.unsplash.com/random/1920x1080')",
      }}
    >
      <div className="w-1-3-screen h-1-3-screen bg-white rounded flex flex-col overflow-hidden">
        <div className="standard-color py-12 px-6 text-center">
          <h2 className="font-bold text-2xl mb-1">Demotion 單一簽入系統</h2>
          <h4 className="text-lg">使用自己的帳戶登入 Demotion 系統。</h4>
        </div>
        <div className="p-6 place-center w-full h-full">
          <div>
            <BaseInput id="user-input" label="使用者名稱" />
            <BaseInput id="user-input" label="　　　密碼" />
            <BaseButton solid className="mt-4">
              登入
            </BaseButton>
            <BaseButton className="ml-4">註冊</BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
