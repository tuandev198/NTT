"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import TitleBanner from "@/ui/TitleBanner";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const faqData = [
  {
    _id: "01",
    title: "Làm sao để đặt dịch vụ?",
    subTitle:
      "Bạn có thể gửi yêu cầu qua trang Liên hệ. Chúng tôi sẽ tư vấn gói phù hợp, thống nhất phạm vi công việc và báo giá trước khi bắt đầu.",
  },
  {
    _id: "02",
    title: "Dịch vụ có phù hợp với tôi không?",
    subTitle:
      "Dù bạn là cá nhân, startup hay doanh nghiệp, chúng tôi đều có gói triển khai linh hoạt theo mục tiêu và ngân sách của bạn.",
  },
  {
    _id: "03",
    title: "Thời gian triển khai mất bao lâu?",
    subTitle:
      "Tùy mức độ phức tạp, thời gian thường từ vài ngày đến vài tuần. Chúng tôi sẽ gửi timeline rõ ràng theo từng mốc công việc.",
  },
  {
    _id: "05",
    title: "Tôi theo dõi tiến độ ở đâu?",
    subTitle:
      "Bạn sẽ nhận được cập nhật theo từng giai đoạn (thiết kế, phát triển, kiểm thử, bàn giao) và có thể trao đổi trực tiếp với người phụ trách dự án.",
  },
];

export default function FaqClient() {
  return (
    <div className="w-full">
      <TitleBanner subtitle="Khám phá thông tin" title="Câu hỏi thường gặp" />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            {faqData?.map((item) => (
              <Disclosure
                key={item?._id}
                as="div"
                className="p-6 hover:cursor-pointer"
                defaultOpen={false}
              >
                <DisclosureButton className="group relative flex w-full items-center justify-between">
                  <p
                    className={`absolute left-0 -top-10 w-full h-auto px-3 py-1 text-sm group-hover:text-white group-data-[open]:text-secondaryColor text-left duration-300 `}
                  >
                    {item?._id}
                    <span
                      className={`w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                    <span
                      className={`w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                  </p>

                  <span className="text-lg font-semibold text-white/80 group-data-[open]:text-white">
                    {item?.title}
                  </span>
                  <BiChevronDown className="size-6 fill-white/70 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/80 tracking-wide leading-6">
                  {item?.subTitle}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
        <div className="w-full mdl:w-1/4 font-titleFont">
          <h3 className="font-titleFont text-2xl underline underline-offset-4 decoration-[1px] decoration-secondaryColor">
            Thông tin liên hệ
          </h3>
          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Bangladesh:</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Rupnogor Abashik Area, <br />
                Mirpur-1, Dhaka.
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                reactjsbd@gmail.com
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +968 97859628
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +968 97859628
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Oman:</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Muscat Business Area, Ruwi, <br />
                Muscat, Sultanate of Oman
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                reactjsbd@gmail.com
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +968 97859628
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +968 97859628
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

