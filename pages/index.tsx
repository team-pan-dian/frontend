import React from "react";
import BasePage from "../components/Page/BasePage";
import VideoBundleDownloadButton from "../components/OfflineVideo/VideoBundleDownloadButton";

export default function Home() {
  return (
    <BasePage id="home" title="首頁" full>
      <div className="pt-60">
        <VideoBundleDownloadButton
          courseId="1"
          videos={[
            {
              id: "25157",
              url: "https://download.samplelib.com/mp4/sample-15s.mp4",
            },
            {
              id: "25158",
              url: "https://download.samplelib.com/mp4/sample-15s.mp4",
            },
            {
              id: "25159",
              url: "https://download.samplelib.com/mp4/sample-15s.mp4",
            },
            {
              id: "25160",
              url: "https://download.samplelib.com/mp4/sample-15s.mp4",
            },
          ]}
        />
      </div>
    </BasePage>
  );
}
