import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";

const CoreServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 xl:px-28">
      <h3 className="font-titleFont uppercase text-3xl mdl:text-4xl font-bold text-gray-900 dark:text-white py-10 xl:py-16 text-center">
        Dịch vụ <span className="text-secondaryColor">cốt lõi</span>
      </h3>
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-10">
        <div className="w-full h-60 bg-transparent border border-gray-300 dark:border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6 text-gray-900 dark:text-white">
          <SiAntdesign className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Thiết kế <span className="text-secondaryColor -mt-1">UI/UX</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-gray-300 dark:border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6 text-gray-900 dark:text-white">
          <RiCodeSSlashFill className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Phát triển
            <span className="text-secondaryColor -mt-1">website</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-gray-300 dark:border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6 text-gray-900 dark:text-white">
          <FaGlobeAmericas className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Tên miền
            <span className="text-secondaryColor -mt-1">& Hosting</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-gray-300 dark:border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6 text-gray-900 dark:text-white">
          <BsPencilSquare className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Nội dung
            <span className="text-secondaryColor -mt-1">& SEO</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
