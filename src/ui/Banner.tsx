"use client";
import React, { useState } from "react";
import SliderText from "./SliderText";

const Banner = () => {
  const sliderContent = [
    {
      title: "CÔNG TY THIẾT KẾ & PHÁT TRIỂN WEBSITE",
      desTitle: "ReactBD",
      des: "là đơn vị phát triển web với mục tiêu giúp doanh nghiệp ở mọi quy mô đưa hoạt động lên môi trường trực tuyến. Chiến lược số của chúng tôi hỗ trợ startup và doanh nghiệp xây dựng, duy trì thương hiệu bền vững trên hệ sinh thái internet.",
      backgroundClass: "bg-bgOne",
    },
    {
      title: "HOSTING & BẢO TRÌ WEBSITE",
      desTitle: "Website",
      des: "bảo trì là công việc giúp website luôn vận hành ổn định và “khỏe mạnh”. Vì vậy, với dự án đầu tiên, chúng tôi tặng 1 năm hosting và bảo trì miễn phí, đồng thời đảm bảo tối ưu hiệu năng website đúng thời hạn.",
      backgroundClass: "bg-bgTwo",
    },
    {
      title: "SẢN XUẤT NỘI DUNG & SEO",
      desTitle: "Nội dung",
      des: "SEO tập trung vào việc tạo nội dung giúp trang của bạn có thứ hạng cao trên công cụ tìm kiếm. Điều này bao gồm cách viết và cấu trúc nội dung trên website. Để có nội dung chất lượng, bạn có thể tin tưởng đội ngũ giàu kinh nghiệm của chúng tôi.",
      backgroundClass: "bg-bgThree",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full bg-primaryColor pt-10">
      <div
        className={`${sliderContent[currentSlide].backgroundClass} transition-bg duration-1000 w-full bg-contain bg-no-repeat xl:bg-cover bg-center font-titleFont relative py-10 mdl:py-32`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col items-start gap-10">
          <SliderText
            title={sliderContent[currentSlide].title}
            desTitle={sliderContent[currentSlide].desTitle}
            des={sliderContent[currentSlide].des}
          />
        </div>
        <div className="absolute -bottom-20 mdl:bottom-0 flex flex-col mdl:flex-row items-start px-4 mdl:items-center bg-transparent justify-center gap-2 mdl:gap-6 text-[14px] text-gray-400 py-4 w-full bg-primaryColor">
          {sliderContent.map((_, index) => (
            <p
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${
                currentSlide === index ? "text-white" : "text-gray-400"
              } relative h-full w-48 px-3 py-1 hover:text-white hover:cursor-pointer duration-300 overflow-hidden bg-primaryColor bg-opacity-10 group`}
            >
              0{index + 1}
              <span
                className={`${
                  currentSlide === index
                    ? "bg-secondaryColor translate-y-0"
                    : "bg-gray-400 translate-y-[1px]"
                } w-full h-0.5 inline-flex absolute bottom-0 left-0 transform group-hover:translate-y-0 transition-transform duration-500 group-hover:bg-secondaryColor`}
              ></span>
              <span
                className={`${
                  currentSlide === index
                    ? "bg-secondaryColor -translate-x-0"
                    : "bg-gray-400 -translate-x-[1px]"
                } w-0.5 h-3 inline-flex absolute bottom-0 left-0  group-hover:-translate-x-0 transition-transform duration-500 group-hover:bg-secondaryColor`}
              ></span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
