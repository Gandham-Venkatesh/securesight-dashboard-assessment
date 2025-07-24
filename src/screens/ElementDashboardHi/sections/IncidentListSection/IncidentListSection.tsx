import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const IncidentListSection = (): JSX.Element => {
  // Camera data for the sidebar
  const cameras = [
    { id: "01", name: "Camera - 01", isActive: true },
    { id: "02", name: "Camera - 02", isActive: false },
    { id: "03", name: "Camera - 03", isActive: false },
  ];

  // Timeline hour markers
  const timeMarkers = Array.from({ length: 25 }, (_, i) => {
    return {
      hour: i.toString().padStart(2, "0") + ":00",
      position: (i / 24) * 100,
    };
  });

  // Incident data
  const incidents = [
    {
      type: "unauthorised",
      label: "Unauthorised Access",
      icon: "/lucide-icons---door-open.svg",
      color: "bg-orange-950 border-orange-500 text-orange-300",
      camera: "01",
      position: { left: "136px", top: "23px" },
    },
    {
      type: "face",
      label: "Face Recognised",
      icon: "/lucide-icons---user-search.svg",
      color: "bg-blue-950 border-blue-500 text-blue-300",
      camera: "01",
      position: { left: "409px", top: "23px" },
      time: "14:45",
    },
    {
      type: "multiple",
      label: "4 Multiple Events",
      icon: "/lucide-icons---triangle-alert.svg",
      color: "bg-stone-900 border-stone-300 text-stone-300",
      camera: "01",
      position: { left: "764px", top: "23px" },
      iconPosition: "right",
    },
    {
      type: "gun",
      label: "Gun Threat",
      icon: "/lucide-icons---siren.svg",
      color: "bg-red-950 border-rose-500 text-red-300",
      camera: "01",
      position: { left: "1043px", top: "37px" },
    },
    {
      type: "unauthorised",
      label: "Unauthorised Access",
      icon: "/lucide-icons---door-open.svg",
      color: "bg-orange-950 border-orange-500 text-orange-300",
      camera: "01",
      position: { left: "1042px", top: "2px" },
    },
    {
      type: "unauthorised",
      label: "Unauthorised Access",
      icon: "/lucide-icons---door-open.svg",
      color: "bg-orange-950 border-orange-500 text-orange-300",
      camera: "02",
      position: { left: "68px", top: "23px" },
    },
    {
      type: "face",
      label: "Face Recognised",
      icon: "/lucide-icons---user-search.svg",
      color: "bg-blue-950 border-blue-500 text-blue-300",
      camera: "02",
      position: { left: "579px", top: "23px" },
    },
    {
      type: "traffic",
      label: "Traffic congestion",
      icon: "/lucide-icons---users-round.svg",
      color: "bg-teal-950 border-teal-500 text-teal-300",
      camera: "03",
      position: { left: "347px", top: "23px" },
    },
    {
      type: "unauthorised",
      label: "Unauthorised Access",
      icon: "/lucide-icons---door-open.svg",
      color: "bg-orange-950 border-orange-500 text-orange-300",
      camera: "03",
      position: { left: "786px", top: "23px" },
    },
  ];

  return (
    <Card className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow border-0">
      <div className="flex items-center justify-between px-4 py-1 relative self-stretch w-full flex-[0_0_auto] bg-[#131313] rounded-md">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <Button
            variant="ghost"
            size="icon"
            className="p-0.5 h-auto w-auto rounded-md"
          >
            <div className="relative w-4 h-4">
              <img
                className="absolute w-2.5 h-3 top-0.5 left-[3px]"
                alt="Previous"
                src="/vector-23.svg"
              />
            </div>
          </Button>

          <img
            className="relative flex-[0_0_auto]"
            alt="Video player button"
            src="/-video-player-button.svg"
          />

          <Button
            variant="ghost"
            size="icon"
            className="p-0.5 h-auto w-auto rounded-md"
          >
            <div className="relative w-8 h-8">
              <img
                className="absolute w-[27px] h-[27px] top-[3px] left-[3px]"
                alt="Play"
                src="/vector-29.svg"
              />
            </div>
          </Button>

          <img
            className="relative flex-[0_0_auto]"
            alt="Video player button"
            src="/-video-player-button-1.svg"
          />

          <Button
            variant="ghost"
            size="icon"
            className="p-0.5 h-auto w-auto rounded-md"
          >
            <div className="relative w-4 h-4">
              <img
                className="absolute w-2.5 h-3 top-0.5 left-[3px]"
                alt="Next"
                src="/vector-34.svg"
              />
            </div>
          </Button>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <span className="relative w-fit mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
              03:12:37 (15-Jun-2025)
            </span>
          </div>

          <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto]">
            <span className="relative w-4 h-4 font-text-xs-leading-4-normal font-[number:var(--text-xs-leading-4-normal-font-weight)] text-white text-[length:var(--text-xs-leading-4-normal-font-size)] text-center tracking-[var(--text-xs-leading-4-normal-letter-spacing)] leading-[var(--text-xs-leading-4-normal-line-height)] whitespace-nowrap [font-style:var(--text-xs-leading-4-normal-font-style)]">
              1x
            </span>

            <Button
              variant="ghost"
              size="icon"
              className="p-0.5 h-auto w-auto rounded-md"
            >
              <div className="relative w-4 h-4">
                <img
                  className="absolute w-3.5 h-3.5 top-px left-px"
                  alt="Speed"
                  src="/vector-30.svg"
                />
              </div>
            </Button>
          </div>
        </div>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]" />
      </div>

      <div className="flex items-start justify-between flex-1 grow bg-[#131313] rounded-md relative self-stretch w-full overflow-hidden">
        {/* Camera List Sidebar */}
        <div className="flex flex-col w-[180px] items-start relative self-stretch">
          <div className="flex items-center justify-center gap-2 p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#131313]">
            <h3 className="relative flex-1 mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base tracking-[0] leading-4">
              Camera List
            </h3>
          </div>

          {cameras.map((camera, index) => (
            <Button
              key={camera.id}
              variant="ghost"
              className={`flex items-center justify-start gap-3 p-4 relative flex-1 self-stretch w-full h-auto ${
                index === 0 ? "bg-[#232323]" : ""
              }`}
            >
              <div className="relative w-4 h-4">
                <img
                  className="absolute w-[13px] h-[11px] top-[3px] left-px"
                  alt="Camera icon"
                  src="/vector-24.svg"
                />
              </div>
              <span className="relative w-fit font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xs tracking-[0] leading-3 whitespace-nowrap text-left">
                {camera.name}
              </span>
            </Button>
          ))}
        </div>

        {/* Timeline and Incidents */}
        <div className="relative flex-1 self-stretch grow">
          {/* Timeline */}
          <div className="flex flex-col w-full items-start gap-2 px-2 py-3.5 absolute top-0 left-0 bg-[#131313]">
            <div className="items-center gap-1.5 flex-[0_0_auto] flex relative self-stretch w-full overflow-hidden">
              {timeMarkers.map((marker, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-start relative flex-[0_0_auto]"
                >
                  <div className="relative self-stretch mt-[-0.86px] font-['IBM_Plex_Mono',Helvetica] font-semibold text-stone-200 text-[8px] tracking-[0] leading-[normal]">
                    {marker.hour}
                  </div>
                  <div className="flex items-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-px h-2.5"
                      alt="Line"
                      src="/line-01.svg"
                    />
                    {Array.from({ length: 11 }, (_, i) => (
                      <img
                        key={i}
                        className={`relative w-px h-1.5 ${i === 10 ? "mr-[-1.00px]" : ""}`}
                        alt="Line"
                        src="/line-07.svg"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current time indicator */}
          <div className="inline-flex items-center justify-center px-0.5 py-px absolute top-[3px] left-[392px] bg-[#ffcc00] rounded-md z-10">
            <div className="relative w-fit mt-[-1.00px] font-['IBM_Plex_Mono',Helvetica] font-semibold text-black text-[8px] tracking-[0] leading-[normal]">
              03:12:37s
            </div>
            <img
              className="absolute w-px h-[284px] top-3 left-6"
              alt="Current time line"
              src="/line-37.svg"
            />
          </div>

          {/* Camera rows with incidents */}
          {cameras.map((camera, cameraIndex) => (
            <div
              key={camera.id}
              className={`absolute w-full h-[66px] ${
                cameraIndex === 0
                  ? "top-12"
                  : cameraIndex === 1
                    ? "top-[114px]"
                    : "top-[180px]"
              } left-0 ${cameraIndex === 0 ? "bg-[#232323]" : ""}`}
            >
              {incidents
                .filter((incident) => incident.camera === camera.id)
                .map((incident, index) => (
                  <div
                    key={`${camera.id}-${index}`}
                    className="inline-flex items-start absolute"
                    style={{
                      top: incident.position.top,
                      left: incident.position.left,
                    }}
                  >
                    <Badge
                      className={`pl-1.5 pr-2 py-0.5 rounded border-l-2 [border-left-style:solid] inline-flex items-center justify-center gap-1 ${incident.color}`}
                    >
                      {incident.iconPosition !== "right" && (
                        <img
                          className="relative w-3 h-3"
                          alt={incident.type}
                          src={incident.icon}
                        />
                      )}
                      <span className="mt-[-1.00px] font-text-xs-leading-4-medium text-center leading-[var(--text-xs-leading-4-medium-line-height)] relative w-fit font-[number:var(--text-xs-leading-4-medium-font-weight)] tracking-[var(--text-xs-leading-4-medium-letter-spacing)] whitespace-nowrap [font-style:var(--text-xs-leading-4-medium-font-style)]">
                        {incident.label}
                        {incident.time && (
                          <span className="ml-4 text-blue-500">
                            {incident.time}
                          </span>
                        )}
                      </span>
                      {incident.iconPosition === "right" && (
                        <img
                          className="relative w-3 h-3"
                          alt={incident.type}
                          src={incident.icon}
                        />
                      )}
                    </Badge>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
