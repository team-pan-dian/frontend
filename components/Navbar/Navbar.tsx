import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute w-screen p-3 text-black standard-color bg-opacity-5">
      <div className="flex justify-center items-center space-x-2 font-bold">
        <Link href="/course">
          <button type="button">Demotion</button>
        </Link>
      </div>
    </div>
  );
}
