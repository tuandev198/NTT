import React from "react";
import {
  iconFour,
  iconFive,
  iconSix,
  iconSeven,
  iconEight,
  iconNine,
  iconTen,
  iconEleven,
} from "@/assets";
import Image from "next/image";

const BasicProducts = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            01
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconFour} alt="iconFour" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">React js</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Tương lai của web
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Xây dựng UI mượt, component hóa, dễ mở rộng và tối ưu hiệu năng cho
            trải nghiệm người dùng.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            02
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconFive} alt="iconFive" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">
              React Native
            </h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Ứng dụng di động của bạn
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Phát triển app iOS/Android nhanh chóng, đồng bộ thiết kế và dễ bảo
            trì.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            03
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconSix} alt="iconSix" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Next js</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Linh hoạt không giới hạn
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Tối ưu SEO, tốc độ tải trang và trải nghiệm người dùng với kiến trúc
            hiện đại.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            04
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconSeven} alt="iconSeven" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">
              Tailwindcss
            </h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Framework CSS
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Thiết kế nhanh, nhất quán và dễ tùy biến theo hệ thống design system.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            05
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconEight} alt="iconEight" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Sanity.io</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Nội dung là dữ liệu
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Quản trị nội dung linh hoạt, mô hình dữ liệu rõ ràng và dễ tích hợp
            vào website/app.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            06
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconNine} alt="iconNine" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Firebase</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Tăng tốc ứng dụng
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Authentication, database, storage… giúp triển khai nhanh và mở rộng
            thuận tiện.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            07
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconTen} alt="iconTen" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Vercel</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Triển khai đơn giản
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            CI/CD tự động, preview theo nhánh và tối ưu hiệu năng cho Next.js.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
            08
            <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
            <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <Image src={iconEleven} alt="iconEleven" />
          </div>
          <div className="font-titleFont">
            <h3 className="text-2xl font-semibold tracking-wider">Netlify</h3>
            <p className="text-sm uppercase text-secondaryColor mt-1">
              Website của bạn ở đây
            </p>
          </div>
        </div>
        <div>
          <p className="text-darkText text-base tracking-wide text-start">
            Triển khai nhanh, dễ tích hợp và quản lý website tĩnh/SPA hiệu quả.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicProducts;
