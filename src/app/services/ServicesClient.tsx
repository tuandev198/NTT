"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiBarcodeFill, RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import ServicesDetails from "@/ui/ServicesDetails";
import ServiceHighlights from "@/ui/ServiceHighlights";

const servicesData = [
  {
    no: "01",
    title: "Thiết kế Portfolio",
    startingAmt: "8.000.000",
    detailsOne: "Thiết kế giao diện đầy đủ",
    detailsTwo: "Tối ưu hiển thị mọi thiết bị",
    detailsThree: "Ứng dụng trang đơn (SPA)",
    detailsFour: "Bàn giao mã nguồn",
    detailsFive: "Triển khai theo nhu cầu",
  },
  {
    no: "02",
    title: "Website một trang",
    startingAmt: "10.000.000",
    detailsOne: "Thiết kế giao diện đầy đủ",
    detailsTwo: "Tối ưu hiển thị mọi thiết bị",
    detailsThree: "Ứng dụng trang đơn (SPA)",
    detailsFour: "Bàn giao mã nguồn",
    detailsFive: "Triển khai theo nhu cầu",
  },
  {
    no: "03",
    title: "Ứng dụng chat",
    startingAmt: "Liên Hệ",
    detailsOne: "Thiết kế giao diện đầy đủ",
    detailsTwo: "Tối ưu hiển thị mọi thiết bị",
    detailsThree: "Ứng dụng trang đơn (SPA)",
    detailsFour: "Bàn giao mã nguồn",
    detailsFive: "Triển khai theo nhu cầu",
  },
  {
    no: "04",
    title: "Website thương mại điện tử",
    startingAmt: "Liên hệ",
    detailsOne: "Thiết kế giao diện đầy đủ",
    detailsTwo: "Tối ưu hiển thị mọi thiết bị",
    detailsThree: "Ứng dụng trang đơn (SPA)",
    detailsFour: "Bàn giao mã nguồn",
    detailsFive: "Triển khai theo nhu cầu",
  },
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<
    "development" | "design" | "domain" | "hosting"
  >("development");

  return (
    <div>
      <TitleBanner subtitle="Khám phá cơ hội" title="Dịch vụ" />
      <ServiceHighlights />
      <div className="max-w-screen-lg mx-auto pt-32">
        <div className="px-4 -mt-32 mb-8 lg:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 font-titleFont font-semibold uppercase text-base md:text-lg lgl:text-base xl:text-lg overflow-hidden rounded-md border border-borderColor/60">
            <button
              type="button"
              onClick={() => setActiveTab("development")}
              className={[
                "relative flex items-center justify-center gap-3 w-full h-14 md:h-16 cursor-pointer",
                "bg-primaryColor border-b md:border-b-0 md:border-r border-borderColor/60",
                activeTab === "development"
                  ? "bg-secondaryColor text-white"
                  : "text-white/80 hover:bg-white hover:text-primaryColor",
              ].join(" ")}
              aria-pressed={activeTab === "development"}
            >
              <RiCodeSSlashFill className="text-lg" />
              Phát triển
              {activeTab === "development" && (
                <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-white/80" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("design")}
              className={[
                "relative flex items-center justify-center gap-3 w-full h-14 md:h-16 cursor-pointer",
                "bg-primaryColor border-b md:border-b-0 md:border-r border-borderColor/60",
                activeTab === "design"
                  ? "bg-secondaryColor text-white"
                  : "text-white/80 hover:bg-white hover:text-primaryColor",
              ].join(" ")}
              aria-pressed={activeTab === "design"}
            >
              <SiAntdesign className="text-lg" />
              Thiết kế
              {activeTab === "design" && (
                <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-white/80" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("domain")}
              className={[
                "relative flex items-center justify-center gap-3 w-full h-14 md:h-16 cursor-pointer",
                "bg-primaryColor border-b md:border-b-0 md:border-r border-borderColor/60",
                activeTab === "domain"
                  ? "bg-secondaryColor text-white"
                  : "text-white/80 hover:bg-white hover:text-primaryColor",
              ].join(" ")}
              aria-pressed={activeTab === "domain"}
            >
              <IoMdCheckmarkCircle className="text-lg" />
              Tên miền
              {activeTab === "domain" && (
                <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-white/80" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hosting")}
              className={[
                "relative flex items-center justify-center gap-3 w-full h-14 md:h-16 cursor-pointer",
                "bg-primaryColor border-borderColor/60",
                activeTab === "hosting"
                  ? "bg-secondaryColor text-white"
                  : "text-white/80 hover:bg-white hover:text-primaryColor",
              ].join(" ")}
              aria-pressed={activeTab === "hosting"}
            >
              <RiBarcodeFill className="text-lg" />
              Hosting
              {activeTab === "hosting" && (
                <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-white/80" />
              )}
            </button>
          </div>
        </div>
      </div>

      {activeTab === "development" && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}

      {activeTab === "design" && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}

      {activeTab === "domain" && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}

      {activeTab === "hosting" && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

