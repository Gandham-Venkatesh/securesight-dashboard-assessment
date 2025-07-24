import React from "react";
import { CameraFeedSection } from "./sections/CameraFeedSection";
import { HeaderSection } from "./sections/HeaderSection";
import { IncidentListSection } from "./sections/IncidentListSection/IncidentListSection";

export const ElementDashboardHi = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[linear-gradient(180deg,rgba(21,21,21,1)_0%,rgba(0,0,0,1)_100%)] w-full max-w-[1440px] min-h-screen relative">
        <div className="absolute w-[108px] h-[725px] top-[288px] left-[665px] bg-[#d0a70459] rounded-[54px/362.5px] -rotate-90 blur-[100px]" />

        <div className="relative z-10 flex flex-col w-full h-full">
          <HeaderSection />
          <CameraFeedSection />
          <IncidentListSection />
        </div>
      </div>
    </div>
  );
};
