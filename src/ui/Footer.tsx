import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsFillPhoneFill,
} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 py-10 border-t border-gray-200 dark:border-t-borderColor">
      <div className="flex flex-col gap-4">
        <h2 className="font-titleFont text-2xl font-normal tracking-wider text-gray-900 dark:text-white">
          CellVn Solution
        </h2>
        <p className="text-base text-gray-600 dark:text-darkText tracking-wide">
          Chúng tôi cung cấp giải pháp thiết kế – phát triển website, tối ưu hiệu
          năng và đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số.
        </p>
        <p className="flex items-center text-lg gap-5">
          <BsTwitter className="text-gray-700 dark:text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <ImFacebook className="text-gray-700 dark:text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsYoutube className="text-gray-700 dark:text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsGithub className="text-gray-700 dark:text-white hover:text-secondaryColor duration-500 cursor-pointer" />
        </p>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Thông tin liên hệ
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-gray-600 dark:text-darkText flex items-start gap-6 justify-start hover:text-gray-900 dark:hover:text-white duration-500 cursor-pointer">
            <span className="text-gray-700 dark:text-white text-xl">
              <FaHome />
            </span>
            66 QL 22, Tân An Hội, Củ Chi, Hồ chí Minh
          </p>
          <p className="font-base text-gray-600 dark:text-darkText flex items-start gap-6 justify-start hover:text-gray-900 dark:hover:text-white duration-500 cursor-pointer">
            <span className="text-gray-700 dark:text-white text-xl">
              <MdEmail />
            </span>
          cellvn@gmail.com
          </p>
          <p className="font-base text-gray-600 dark:text-darkText flex items-start gap-6 justify-start hover:text-gray-900 dark:hover:text-white duration-500 cursor-pointer">
            <span className="text-gray-700 dark:text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +84 559903798
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Nội dung
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-gray-600 dark:text-darkText flex items-start gap-6 justify-start hover:text-gray-900 dark:hover:text-white duration-500 cursor-pointer">
            <span className="text-gray-700 dark:text-white text-xl">
              <FaHome />
            </span>
           66 QL 22, Tân An Hội, Củ Chi, Hồ chí Minh
          </p>
          <p className="font-base text-gray-600 dark:text-darkText flex items-start gap-6 justify-start hover:text-gray-900 dark:hover:text-white duration-500 cursor-pointer">
            <span className="text-gray-700 dark:text-white text-xl">
              <MdEmail />
            </span>
         cellvn@gmail.com
          </p>
          <p className="font-base text-gray-600 dark:text-darkText flex items-start gap-6 justify-start hover:text-gray-900 dark:hover:text-white duration-500 cursor-pointer">
            <span className="text-gray-700 dark:text-white text-xl">
              <BsFillPhoneFill />
            </span>
           +84 559903798
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Hỗ trợ & Tài liệu
        </h3>
        <p className="text-base text-gray-600 dark:text-darkText">
          Cần tư vấn nhanh? Hãy để lại thông tin, chúng tôi sẽ liên hệ và gửi tài
          liệu phù hợp với nhu cầu của bạn.
        </p>
      </div>
    </div>
  );
};

export default Footer;
