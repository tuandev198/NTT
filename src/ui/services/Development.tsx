import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { projectThreeImg } from "@/assets";
import Image from "next/image";

const Development = () => {
  return (
    <div className="w-full px-6 flex items-center gap-10 mt-14">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="hidden lgl:inline-flex w-2/5"
      >
        <Image src={projectThreeImg} alt="projectThreeImg" />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl mb-10"
          >
            Phát triển <span className="text-secondaryColor ml-3">website</span>
          </motion.h3>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="grid grid-cols-1 mdl:grid-cols-2 gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Lên kế hoạch
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Xác định mục tiêu, phạm vi, nội dung, luồng người dùng và timeline
                trước khi bắt đầu triển khai.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Phát triển
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Xây dựng chức năng và tích hợp nội dung. Bạn có thể cung cấp nội
                dung hoặc chúng tôi hỗ trợ biên tập theo yêu cầu.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Thiết kế
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Chuyển các yêu cầu đã thống nhất thành giao diện trực quan, đảm
                bảo đúng thương hiệu và trải nghiệm người dùng.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Ra mắt
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Hoàn thiện, kiểm thử, tối ưu và triển khai để website sẵn sàng
                hoạt động cho người dùng cuối.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Development;
