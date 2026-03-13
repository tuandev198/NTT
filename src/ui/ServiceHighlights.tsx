import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    no: "01",
    title: "Thiết kế website đa ngành nghề",
    description:
      "Là dịch vụ chiến lược tại CellVn Solution, chúng tôi có kinh nghiệm triển khai website cho nhiều lĩnh vực khác nhau, từ giới thiệu doanh nghiệp đến bán hàng.",
    bullets: [
      "Thiết kế website giới thiệu, landing page, website bán hàng",
      "Đa ngành nghề, linh hoạt theo mô hình kinh doanh",
      "Tư vấn kiến trúc thông tin và trải nghiệm người dùng",
    ],
    image: "/assets/dv1.png",
    imageLeft: true,
  },
  {
    no: "02",
    title: "Thiết kế Web App, Mobile App",
    description:
      "Thiết kế và phát triển Web App, Mobile App với giao diện thân thiện, trải nghiệm mượt, bảo mật và dễ mở rộng.",
    bullets: [
      "UX/UI tối ưu cho mobile-first",
      "Hỗ trợ đa nền tảng",
      "Đảm bảo hiệu năng và tính ổn định",
    ],
    image: "/assets/dv1.png",
    imageLeft: false,
  },
  {
    no: "03",
    title: "Dịch vụ SEO nâng cao",
    description:
      "Tối ưu công cụ tìm kiếm giúp thương hiệu của bạn xuất hiện nổi bật trên Google với chiến lược rõ ràng, bền vững.",
    bullets: [
      "Nghiên cứu từ khóa, cấu trúc nội dung",
      "Báo cáo định kỳ minh bạch",
      "Tối ưu on-page, technical và off-page",
    ],
    image: "/assets/dv1.png",
    imageLeft: true,
  },
  {
    no: "04",
    title: "Sáng tạo nội dung",
    description:
      "Xây dựng nội dung thu hút, đúng insight khách hàng cho website, fanpage và các kênh truyền thông.",
    bullets: [
      "Viết bài chuẩn SEO cho website",
      "Sáng tạo nội dung fanpage",
      "Hoạch định nội dung định kỳ",
    ],
    image: "/assets/dv1.png",
    imageLeft: false,
  },
  {
    no: "05",
    title: "Quản trị & vận hành Website, Fanpage",
    description:
      "Đồng hành trong suốt quá trình vận hành, cập nhật nội dung, theo dõi và cải thiện hiệu quả website, fanpage.",
    bullets: [
      "Theo dõi, cập nhật nội dung thường xuyên",
      "Đảm bảo website vận hành ổn định",
      "Tối ưu trải nghiệm người dùng theo thời gian",
    ],
    image: "/assets/dv1.png",
    imageLeft: true,
  },
  {
    no: "06",
    title: "Thiết kế Branding & nhận diện thương hiệu",
    description:
      "Thiết kế logo, profile, ấn phẩm nhận diện giúp thương hiệu của bạn nổi bật và nhất quán trên mọi kênh.",
    bullets: [
      "Logo, profile, brochure, leaflet…",
      "Bộ nhận diện đa kênh",
      "Định hướng phong cách và guideline cơ bản",
    ],
    image: "/assets/dv1.png",
    imageLeft: false,
  },
  {
    no: "07",
    title: "Quảng cáo Facebook & Google",
    description:
      "Lên kế hoạch và triển khai chiến dịch quảng cáo tối ưu chi phí, tập trung vào hiệu quả chuyển đổi.",
    bullets: [
      "Chiến lược nhắm mục tiêu rõ ràng",
      "Thông điệp và landing page phù hợp",
      "Theo dõi, tối ưu liên tục",
    ],
    image: "/assets/dv1.png",
    imageLeft: true,
  },
  {
    no: "08",
    title: "Đăng ký website Bộ Công Thương",
    description:
      "Hỗ trợ thực hiện thủ tục thông báo/đăng ký website với Bộ Công Thương để tăng uy tín và tuân thủ pháp lý.",
    bullets: [
      "Tư vấn loại hình phù hợp",
      "Thực hiện hồ sơ đăng ký",
      "Hướng dẫn các bước duy trì sau đăng ký",
    ],
    image: "/assets/dv1.png",
    imageLeft: false,
  },
  {
    no: "09",
    title: "Hosting, Domain (Tên miền)",
    description:
      "Cung cấp giải pháp hosting và tên miền phù hợp nhu cầu, đảm bảo an toàn, ổn định và hỗ trợ kỹ thuật.",
    bullets: [
      "Đa dạng gói hosting/tên miền",
      "Hỗ trợ kỹ thuật liên tục",
      "Cam kết uptime cao",
    ],
    image: "/assets/dv1.png",
    imageLeft: true,
  },
];

export default function ServiceHighlights() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-12 space-y-14">
      {highlights.map((item) => (
        <div
          key={item.no}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            item.imageLeft ? "" : "md:flex-row-reverse"
          }`}
        >
          <div
            className={`w-full ${
              item.imageLeft ? "" : "md:order-2"
            } flex justify-center`}
          >
            <div className="w-full max-w-md border border-borderColor/40 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className={`w-full ${item.imageLeft ? "" : "md:order-1"}`}>
            <p className="text-xs font-semibold tracking-[3px] text-secondaryColor mb-2">
              {item.no}
            </p>
            <h3 className="font-titleFont text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-darkText leading-6 mb-3">
              {item.description}
            </p>
            {item.bullets && (
              <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-darkText">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full border border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-white transition-colors duration-300"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

