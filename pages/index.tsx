import React from "react";
import Image from "next/image";
import Link from "next/link";
import BasePage from "../components/Page/BasePage";
import BaseButton from "../components/Buttons/BaseButton";

export default function Home() {
  return (
    <BasePage id="home" title="首頁" navbar={false}>
      <section className="header w-screen h-screen p-20">
        <div className="grid grid-cols-2 gap-6 w-full h-full items-center">
          <div>
            <h1 className="text-4xl mb-2 font-bold items-center">
              <div className="flex space-x-2">
                <div>
                  <Image
                    src="/icon.svg"
                    alt="Demotion Icon"
                    width="30rem"
                    height="30rem"
                    className="rounded"
                  />
                </div>
                <div>Demotion</div>
              </div>
            </h1>
            <h2 className="text-xl leading-relaxed mb-2">
              消弭城鄉差距。讓所有學生都能在穩定的系統、周到的設計以及精緻的影片中，學習並發展自己有興趣的事物。
            </h2>
            <Link href="/course">
              <BaseButton solid>查看開放課程 📖</BaseButton>
            </Link>
          </div>
          <div>{/* YouTube video here */}</div>
        </div>
      </section>
    </BasePage>
  );
}
