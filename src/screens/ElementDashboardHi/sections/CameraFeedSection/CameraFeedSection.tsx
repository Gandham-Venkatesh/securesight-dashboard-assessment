import {
  CalendarDaysIcon,
  CheckCheckIcon,
  DiscIcon,
  DoorOpenIcon,
  EllipsisVerticalIcon,
  PlusIcon,
  UserSearchIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

export const CameraFeedSection = (): JSX.Element => {
  // Data for incidents to enable mapping
  const incidents = [
    {
      id: 1,
      type: "Unauthorised Access",
      location: "Shop Floor Camera A",
      time: "14:35 - 14:37 on 7-Jul-2025",
      image: "/mask-group-2.png",
      iconSrc: "/vector-14.svg",
    },
    {
      id: 2,
      type: "Gun Threat",
      location: "Shop Floor Camera A",
      time: "14:35 - 14:37 on 7-Jul-2025",
      image: "/group-14.png",
      iconSrc: "/vector-10.svg",
    },
    {
      id: 3,
      type: "Unauthorised Access",
      location: "Shop Floor Camera A",
      time: "14:35 - 14:37 on 7-Jul-2025",
      image: "/group-14-1.png",
      iconSrc: "/vector-14.svg",
    },
    {
      id: 4,
      type: "Unauthorised Access",
      location: "Shop Floor Camera A",
      time: "14:35 - 14:37 on 7-Jul-2025",
      image: "/group-14-2.png",
      iconSrc: "/vector-14.svg",
    },
    {
      id: 5,
      type: "Unauthorised Access",
      location: "Shop Floor Camera A",
      time: "14:35 - 14:37 on 7-Jul-2025",
      image: "/mask-group-3.png",
      iconSrc: "/vector-14.svg",
    },
  ];

  // Data for camera thumbnails
  const cameraThumbnails = [
    {
      id: 1,
      name: "Camera - 02",
      image: "/mask-group.png",
    },
    {
      id: 2,
      name: "Camera - 02",
      image: "/mask-group-1.png",
    },
  ];

  return (
    <div className="flex items-start gap-6 relative self-stretch w-full">
      {/* Main Camera Feed */}
      <div className="relative h-[450px] rounded-md overflow-hidden bg-[url(/screenshot-2025-07-10-at-7-09-09-pm-1.png)] bg-cover bg-[50%_50%] flex-1">
        <div className="relative h-full">
          {/* Gradient overlay */}
          <div className="absolute w-full h-[116px] bottom-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
          <div className="absolute w-full h-full top-0 left-0 bg-[#0000001a]" />

          {/* Camera label */}
          <div className="absolute bottom-4 left-2">
            <Badge className="pl-2.5 pr-2 py-0.5 bg-neutral-950 border-neutral-700 shadow-shadows-shadow-sm flex items-center gap-1">
              <DiscIcon className="w-3 h-3" />
              <span className="font-text-sm-medium text-neutral-300 text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] tracking-[var(--text-sm-medium-letter-spacing)]">
                Camera - 01
              </span>
            </Badge>
          </div>

          {/* Camera thumbnails */}
          <div className="absolute bottom-[76px] right-[141px] flex items-center gap-[12.8px]">
            {cameraThumbnails.map((camera) => (
              <div
                key={camera.id}
                className="flex flex-col w-[120px] items-start rounded-[3.2px] overflow-hidden"
              >
                <div className="flex w-[120px] items-center justify-between pl-[6.4px] pr-[4.8px] py-[3.2px] bg-neutral-950 shadow-shadows-shadow-sm">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-neutral-300 text-[8px] leading-[9.6px]">
                    {camera.name}
                  </div>
                  <EllipsisVerticalIcon className="w-[9.6px] h-[9.6px]" />
                </div>
                <div className="relative w-[120px] h-[67.2px]">
                  <div className="relative w-[122px] h-[69px] -top-px -left-px bg-[#d9d9d9] border-[0.8px] border-solid border-[#ffffff40]">
                    <img
                      className="absolute w-[120px] h-[67px] top-0 left-0"
                      alt="Camera feed thumbnail"
                      src={camera.image}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timestamp */}
          <div className="absolute top-2 left-2">
            <Badge className="pl-1.5 pr-2 py-0.5 bg-stone-900 flex items-center gap-1">
              <CalendarDaysIcon className="w-3 h-3" />
              <span className="font-text-xs-leading-4-medium text-stone-300 text-[length:var(--text-xs-leading-4-medium-font-size)] leading-[var(--text-xs-leading-4-medium-line-height)] tracking-[var(--text-xs-leading-4-medium-letter-spacing)]">
                11/7/2025 - 03:12:37
              </span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Incidents Panel */}
      <Card className="flex-1 h-[450px] bg-[#131313] rounded-md border-none">
        <CardHeader className="p-4 flex flex-row items-center gap-2">
          {/* Alert icon */}
          <div className="relative w-[26px] h-[26px] bg-red-900 rounded-[28px] border-2 border-solid border-red-950 flex items-center justify-center">
            <img className="w-3 h-3" alt="Alert icon" src="/vector-12.svg" />
          </div>

          {/* Title */}
          <div className="flex-1">
            <h3 className="self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] text-neutral-50 text-lg tracking-[-0.45px] leading-[18px] font-semibold">
              15 Unresolved Incidents
            </h3>
          </div>

          {/* Incident type indicators */}
          <div className="flex items-center gap-[3px]">
            <div className="flex items-center">
              <Badge className="p-1 bg-orange-950 rounded-2xl">
                <DoorOpenIcon className="w-3 h-3" />
              </Badge>
              <Badge className="p-1 bg-red-950 rounded-2xl -ml-1">
                <PlusIcon className="w-3 h-3" />
              </Badge>
              <Badge className="p-1 bg-blue-950 rounded-2xl -ml-1">
                <UserSearchIcon className="w-3 h-3" />
              </Badge>
            </div>

            <Badge className="pl-1.5 pr-2 py-0.5 bg-neutral-950 rounded-2xl border-neutral-700 shadow-shadows-shadow-sm flex items-center gap-1">
              <CheckCheckIcon className="w-3 h-3" />
              <span className="font-text-xs-leading-4-medium text-neutral-300 text-[length:var(--text-xs-leading-4-medium-font-size)] leading-[var(--text-xs-leading-4-medium-line-height)] tracking-[var(--text-xs-leading-4-medium-letter-spacing)]">
                4 resolved incidents
              </span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="gap-4 pt-0 pb-6 px-3 overflow-auto max-h-[370px]">
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className="flex items-center gap-4 pl-1 pr-3 py-1 rounded-md overflow-hidden hover:bg-neutral-800/30 transition-colors"
            >
              {/* Incident thumbnail */}
              <div className="relative w-[120px] h-[67.2px]">
                <div className="relative w-[122px] h-[69px] -top-px -left-px bg-[#d9d9d9] rounded-md border border-solid border-[#ffffff40]">
                  <img
                    className="absolute w-[120px] h-[67px] top-0 left-0"
                    alt="Incident footage"
                    src={incident.image}
                  />
                </div>
              </div>

              {/* Incident details */}
              <div className="flex flex-col h-[67px] items-start justify-between flex-1">
                <div className="flex items-center gap-1 self-stretch w-full">
                  <div className="relative w-4 h-4">
                    <img
                      className="absolute w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      alt="Incident type icon"
                      src={incident.iconSrc}
                    />
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-bold text-white text-xs">
                    {incident.type}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-[5px] self-stretch w-full">
                  <div className="flex w-[120px] items-center gap-1">
                    <img
                      className="w-2.5 h-2.5"
                      alt="Location icon"
                      src="/vector-3.svg"
                    />
                    <div className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] whitespace-nowrap">
                      {incident.location}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 self-stretch w-full">
                    <img
                      className="w-[9px] h-2.5"
                      alt="Time icon"
                      src="/vector-7.svg"
                    />
                    <div className="[font-family:'Inter',Helvetica] font-bold text-white text-[10px] whitespace-nowrap">
                      {incident.time}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resolve button */}
              <Button
                variant="ghost"
                className="inline-flex items-center gap-1 px-3 py-2.5 h-auto"
              >
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#ffcc00] text-[10px]">
                  Resolve
                </span>
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[5px] h-2 top-1 left-[5px]"
                    alt="Arrow icon"
                    src="/vector-9.svg"
                  />
                </div>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
