import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { aboutUsImgThree } from "@/assets";
import Image from "next/image";

const PickDomain = () => {
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
        <Image src={aboutUsImgThree} alt="aboutUsImgThree" />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <motion.div
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
          className="flex flex-col gap-4"
        >
          <h3
            // initial={{ x: 50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{
            //   delay: 0.2,
            //   x: { type: "spring", stiffness: 100 },
            //   opacity: { duration: 1 },
            //   ease: "easeIn",
            //   duration: 1,
            // }}
            className="text-2xl"
          >
            Chọn <span className="text-secondaryColor ml-3">tên miền</span>
          </h3>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            Bạn muốn xây dựng blog hoặc tạo sự hiện diện trực tuyến cho doanh
            nghiệp? Bước đầu tiên quan trọng là chọn một tên miền dễ nhớ. Tên
            miền đóng vai trò lớn trong việc nhận diện thương hiệu và mức độ tin
            cậy của website. Tuy nhiên, chọn tên miền đôi khi khá “khó nhằn” và
            là một trong những bước thách thức nhất khi bắt đầu.
          </p>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            Khi chọn tên miền, bạn cần cân nhắc nhiều yếu tố. Để dễ hơn, dưới đây
            là vài gợi ý. Hãy nhớ: website là “bộ mặt” của doanh nghiệp trên môi
            trường online.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="max-w-[450px] py-6 md:py-10 flex flex-col gap-0 md:gap-4"
        >
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Dễ nhớ
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Hạn chế dấu gạch ngang
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Ngắn gọn, dễ gõ
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Tránh ký tự gây nhầm lẫn
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Phù hợp thương hiệu
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Ưu tiên đuôi phổ biến (.com/.vn)
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            Những yếu tố trên giúp bạn chọn tên miền tốt hơn. Tuy nhiên, bạn có
            thể linh hoạt ưu tiên yếu tố quan trọng nhất với mục tiêu của mình.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PickDomain;
