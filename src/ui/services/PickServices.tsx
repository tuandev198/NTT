"use client";
import React, { useMemo, useRef, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiBarcodeFill, RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import PickDomain from "./PickDomain";
import Hosting from "./Hosting";
import Design from "./Design";
import Development from "./Development";

type TabKey = "domain" | "hosting" | "design" | "development";

const PickServices = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("domain");
  const contentRef = useRef<HTMLDivElement | null>(null);

  const tabs = useMemo(
    () =>
      [
        {
          key: "domain" as const,
          label: "Chọn tên miền",
          icon: <IoMdCheckmarkCircle />,
        },
        { key: "hosting" as const, label: "Chọn hosting", icon: <RiBarcodeFill /> },
        { key: "design" as const, label: "Thiết kế website", icon: <SiAntdesign /> },
        {
          key: "development" as const,
          label: "Phát triển website",
          icon: <RiCodeSSlashFill />,
        },
      ] satisfies Array<{ key: TabKey; label: string; icon: React.ReactNode }>,
    []
  );

  const handleTabClick = (key: TabKey) => {
    setActiveTab(key);
    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  return (
    <div className="max-w-screen-2xl mx-auto pt-32 pb-10">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 font-titleFont font-semibold uppercase text-base md:text-lg lgl:text-base xl:text-lg overflow-hidden rounded-md border border-borderColor/60">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleTabClick(tab.key)}
                className={[
                  "relative flex items-center justify-center gap-3 w-full h-14 md:h-16 cursor-pointer",
                  "bg-primaryColor border-b md:border-b-0 md:border-r border-borderColor/60 last:border-r-0",
                  "transition-colors duration-300",
                  isActive
                    ? "bg-secondaryColor text-white"
                    : "text-white/80 hover:bg-white hover:text-primaryColor",
                ].join(" ")}
                aria-pressed={isActive}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
                {isActive && (
                  <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-white/80" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div ref={contentRef} className="pt-8">
        {activeTab === "domain" && <PickDomain />}
        {activeTab === "hosting" && <Hosting />}
        {activeTab === "design" && <Design />}
        {activeTab === "development" && <Development />}
      </div>
    </div>
  );
};

export default PickServices;
