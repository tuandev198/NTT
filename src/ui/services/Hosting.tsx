import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { projectOneImg } from "@/assets";
import Image from "next/image";

const Hosting = () => {
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
        className="w-2/5 hidden lgl:inline-flex"
      >
        <Image src={projectOneImg} alt="projectOneImg" />
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
            Chọn gói <span className="text-secondaryColor ml-3">Hosting</span>
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
            className="grid grid-cols-1 lgl:grid-cols-2 gap-10"
          >
            <div className="flex w-full flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Xác định nhu cầu
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
                Phân tích website hiện tại để biết bạn cần gì trong tương lai.
                Khi chọn nhà cung cấp hosting, hãy lập kế hoạch theo đúng nhu
                cầu.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                So sánh tính năng
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
                Cần so sánh các yếu tố quan trọng như băng thông, dung lượng,
                hệ điều hành máy chủ và các công cụ bảo mật phù hợp.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Chọn loại hosting
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
                Thông thường có 3 lựa chọn phổ biến: Shared, VPS và Dedicated.
                Mỗi loại phù hợp với một mức tải và ngân sách khác nhau.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-secondaryColor">
                  <GiCheckMark />
                </span>
                Đặt gói phù hợp
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
                Chọn và đặt gói hosting phù hợp nhất. Sau đó bạn sẽ nhận email
                hướng dẫn thiết lập/triển khai website.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
