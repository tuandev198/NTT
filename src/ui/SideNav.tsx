import React from "react";
// import { AiOutlineClose } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="w-[500px] h-screen px-10 absolute top-0 right-0 bg-white dark:bg-black border-l border-gray-200 dark:border-borderColor text-gray-900 dark:text-white flex flex-col justify-center gap-4">
      <h4 className="font-titleFont text-lg text-white">Hỗ trợ & Tài liệu</h4>
      <p className="text-gray-600 dark:text-gray-400">
        Chúng tôi sẵn sàng hỗ trợ triển khai, bảo trì và hướng dẫn sử dụng. Bạn
        có thể yêu cầu tài liệu, báo giá hoặc tư vấn giải pháp phù hợp.
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Nếu bạn cần gấp, hãy liên hệ ngay để được phản hồi nhanh nhất.
      </p>
      {/* <span
        onClick={() => setToggleNav(false)}
        className="text-white text-lg absolute top-10 right-10 animate-spin hover:animate-none hover:cursor-pointer"
      >
        <AiOutlineClose />
      </span> */}
    </div>
  );
};

export default SideNav;
