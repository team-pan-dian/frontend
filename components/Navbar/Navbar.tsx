import React from "react";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 w-screen">
      <div className="p-4 grid grid-col-1 md:grid-col-3 content-center items-center bg-gray-100 bg-opacity-75 backdrop-filter backdrop-blur-xl">
        <div className="col-start-1 col-end-1">
          <p>Demotion</p>
        </div>
        <div className="col-start-3 col-end-3 justify-self-end">
          歡迎，Student
        </div>
      </div>
    </div>
  );
}
