import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { projectTwoImg } from "@/assets";
import Image from "next/image";

const Design = () => {
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
        <Image src={projectTwoImg} alt="projectTwoImg" />
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
            className="text-xl lgl:text-2xl mb-10"
          >
            Chọn gói <span className="text-secondaryColor ml-3">Thiết kế</span>
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
            className="grid grid-cols-1 mdl:grid-cols-2 gap-10"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Xác định nhu cầu
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Xác định mục tiêu, tệp khách hàng và nội dung chính để định hướng
                bố cục, phong cách thiết kế và trải nghiệm người dùng.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Thống nhất giao diện
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Chốt màu sắc, font chữ, hình ảnh và các thành phần UI để đảm bảo
                đồng nhất thương hiệu và dễ mở rộng.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Thiết kế responsive
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Tối ưu hiển thị trên mobile/tablet/desktop để tăng chuyển đổi và
                cải thiện trải nghiệm người dùng.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Bàn giao & hỗ trợ
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
                Bàn giao file thiết kế và guideline cơ bản; hỗ trợ chỉnh sửa theo
                phạm vi đã thống nhất.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Design;
