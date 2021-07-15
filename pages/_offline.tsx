import React from "react";
import BasePage from "../components/Page/BasePage";
import Message, { MessageLevel } from "../components/Combination/Message";

export default function OfflinePage() {
  return (
    <BasePage id="no-resource" title="無此資源。">
      <div className="m-10 flex justify-center content-center">
        <div>
          <Message
            errorMessage="您沒下載到這個資源，或資源已經到期。重新連上網路並重新整理頁面後即可繼續斷網使用。"
            mode={MessageLevel.ERROR}
          />
        </div>
      </div>
    </BasePage>
  );
}
