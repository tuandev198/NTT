"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import TitleBanner from "@/ui/TitleBanner";
import ContactForm from "@/ui/ContactForm";
import { motion } from "framer-motion";

const ContactClient = () => {
  let [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="w-full">
      <TitleBanner subtitle="Hỗ trợ 24/7" title="Luôn sẵn sàng đồng hành" />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-10 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-10 col-start-1 col-end-4">
          <div className="flex flex-col gap-5 mdl:gap-10">
            <h2 className="font-titleFont text-2xl mdl:text-5xl">
              Kết nối với chúng tôi
            </h2>
            <p className="text-sm mdl:text-base text-darkText leading-[25px]">
              Chúng tôi sẵn sàng tạo ra một sản phẩm thật khác biệt cho bạn hoặc
              tổ chức của bạn. Hãy gửi cho chúng tôi thông tin về nhu cầu của
              bạn. Bạn có thể liên hệ WhatsApp tại{" "}
              <span className="text-secondaryColor">+88 01817986903</span>.
            </p>
          </div>
          <div>
            {successMessage ? (
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-titleFont text-lg px-10 text-green-400"
              >
                {successMessage}
              </motion.p>
            ) : (
              <ContactForm setSuccessMessage={setSuccessMessage} />
            )}
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
                Khu vực trung tâm, <br />
                Dhaka, Bangladesh.
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
                +00 01000000000
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +88 01100000000
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">USA:</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Khu thương mại, <br />
                New York, USA
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
                +00 24187626
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +00 24187627
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;

