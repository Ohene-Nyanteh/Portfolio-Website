"use client"; // For Next.js App Router

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  return (
    <ReactFullpage
      credits={{ enabled: true }}
      licenseKey="XXXXXXXXXXXXXXXXXXXX"
      debug
      scrollingSpeed={1000} // Adjust scrolling speed if needed
      navigation={true} // Show navigation dots
      render={({ fullpageApi }) => (
        <div className="w-full h-full">
          <div className="section bg-blue-300 flex items-center justify-center h-screen">
            <h1 className="text-white text-4xl">Section 1</h1>
          </div>
          <div className="section bg-red-300 flex items-center justify-center h-screen">
            <h1 className="text-white text-4xl">Section 2</h1>
          </div>
          <div className="section bg-yellow-300 flex items-center justify-center h-screen">
            <h1 className="text-white text-4xl">Section 3</h1>
          </div>
        </div>
      )}
    />
  );
}
