import {
  AlertTriangleIcon,
  CameraIcon,
  ChevronDownIcon,
  ImageIcon,
  LayoutDashboardIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";

export const HeaderSection = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    {
      icon: <LayoutDashboardIcon className="w-4 h-4" />,
      label: "Dashboard",
      iconSrc: "/vector-1.svg",
    },
    {
      icon: <CameraIcon className="w-4 h-4" />,
      label: "Cameras",
      iconSrc: "/vector-3.svg",
    },
    {
      icon: <ImageIcon className="w-4 h-4" />,
      label: "Scenes",
      iconSrc: "/vector-2.svg",
    },
    {
      icon: <AlertTriangleIcon className="w-4 h-4" />,
      label: "Incidents",
      iconSrc: "/vector-8.svg",
    },
    {
      icon: <UsersIcon className="w-4 h-4" />,
      label: "Users",
      iconSrc: "/vector-11.svg",
    },
  ];

  return (
    <header className="flex w-full items-center justify-between pt-4 pb-3 px-6 border-b border-[#ffffff26]">
      {/* Logo Section */}
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex items-center gap-2.5">
          <div className="relative w-[20.39px] h-[26px]">
            <div className="relative w-5 h-[26px]">
              <img
                className="absolute w-2.5 h-4 top-2.5 left-[5px]"
                alt="Vector"
                src="/vector.svg"
              />
              <img
                className="absolute w-5 h-[21px] top-0 left-0"
                alt="Vector"
                src="/vector-4.svg"
              />
            </div>
          </div>
          <div className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[19.2px] whitespace-nowrap">
            <span className="font-normal">MANDLAC</span>
            <span className="font-extrabold">X</span>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center gap-4">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md hover:bg-white/10"
          >
            <div className="relative w-4 h-4">
              {/* Using the original SVG for exact match, but could replace with Lucide icons */}
              <img
                className="absolute w-3 h-3 top-0.5 left-0.5"
                alt={`${item.label} icon`}
                src={item.iconSrc}
              />
            </div>
            <div className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-white text-xs tracking-[-0.12px] leading-[14.4px] whitespace-nowrap">
              {item.label}
            </div>
          </Button>
        ))}
      </nav>

      {/* User Profile Section */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex w-[200px] items-center gap-2 p-2 rounded-md hover:bg-white/10"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src="/image.png" alt="User profile" />
            </Avatar>
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <div className="w-[124px] mr-[-4.00px] font-text-sm-leading-none-semibold text-neutral-100 text-[length:var(--text-sm-leading-none-semibold-font-size)] tracking-[var(--text-sm-leading-none-semibold-letter-spacing)] leading-[var(--text-sm-leading-none-semibold-line-height)] font-[number:var(--text-sm-leading-none-semibold-font-weight)] [font-style:var(--text-sm-leading-none-semibold-font-style)]">
                Mohammed Ajhas
              </div>
              <div className="self-stretch font-text-xs-leading-4-normal font-[number:var(--text-xs-leading-4-normal-font-weight)] text-neutral-100 text-[length:var(--text-xs-leading-4-normal-font-size)] tracking-[var(--text-xs-leading-4-normal-letter-spacing)] leading-[var(--text-xs-leading-4-normal-line-height)] [font-style:var(--text-xs-leading-4-normal-font-style)]">
                ajhas@mandlac.com
              </div>
            </div>
            <ChevronDownIcon className="w-4 h-4 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          {/* Dropdown menu content would go here */}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
