import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/ui/Container";
import TitleBanner from "@/ui/TitleBanner";
import { aboutUsImgOne, aboutUsImgTwo, aboutUsImgThree } from "@/assets";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Đội ngũ",
  description:
    "Giới thiệu đội ngũ CellVn Solution – chuyên gia thiết kế, phát triển website và tư vấn chuyển đổi số.",
  alternates: { canonical: `${siteUrl}/team` },
  openGraph: {
    title: "Đội ngũ",
    description:
      "Giới thiệu đội ngũ CellVn Solution – chuyên gia thiết kế, phát triển website và tư vấn chuyển đổi số.",
    url: `${siteUrl}/team`,
    locale: "vi_VN",
    type: "website",
  },
};

const teamMembers = [
  {
    name: "Tuấn Nguyễn",
    role: "Co-Founder",
    bio: "10+ năm kinh nghiệm trong lĩnh vực phát triển phần mềm và tư vấn chuyển đổi số cho doanh nghiệp.",
  },
  {
    name: "Thư Nguyễn",
    role: "Creative Designer",
    bio: "Chuyên gia UI/UX, tập trung vào trải nghiệm người dùng và thương hiệu cho các dự án web, app.",
  },
  {
    name: "Quân Trần",
    role: "React Developer",
    bio: "Chuyên sâu React, Next.js và các nền tảng web hiện đại. Đảm bảo chất lượng và hiệu năng hệ thống.",
  },
  {
    name: "Hà Phan",
    role: "SEO & Content",
    bio: "Tối ưu hóa công cụ tìm kiếm và xây dựng nội dung giúp khách hàng tăng trưởng bền vững.",
  },
];

export default function TeamPage() {
  return (
    <Container className="pt-0">
      <TitleBanner
        subtitle="Những con người đằng sau"
        title="Đội ngũ"
        className="mdl:pb-0"
      />

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <p className="text-center text-base text-gray-600 dark:text-darkText mb-12 max-w-2xl mx-auto leading-7">
          CellVn Solution được xây dựng bởi đội ngũ giàu kinh nghiệm, đam mê công
          nghệ và luôn đặt khách hàng làm trung tâm. Chúng tôi đồng hành cùng bạn
          từ ý tưởng đến triển khai.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14">
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[3px] text-sky-500">
              01
            </p>
            <h3 className="font-titleFont text-xl font-semibold text-gray-900 dark:text-white">
              Sáng tạo
            </h3>
            <p className="text-sm text-gray-600 dark:text-darkText leading-6">
              Là “chìa khóa” cốt lõi giúp CellVn Solution tạo ra những sản phẩm website
              hoàn hảo và hiệu quả.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[3px] text-emerald-500">
              02
            </p>
            <h3 className="font-titleFont text-xl font-semibold text-gray-900 dark:text-white">
              Sức trẻ
            </h3>
            <p className="text-sm text-gray-600 dark:text-darkText leading-6">
              Nội lực “đặc biệt” này giúp cho chúng tôi luôn giữ vững phong độ
              chinh phục mọi thử thách.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[3px] text-fuchsia-500">
              03
            </p>
            <h3 className="font-titleFont text-xl font-semibold text-gray-900 dark:text-white">
              Thân thiện
            </h3>
            <p className="text-sm text-gray-600 dark:text-darkText leading-6">
              Văn hoá doanh nghiệp thiện lành, tạo ra những sản phẩm thân thiện và
              luôn trân trọng khách hàng.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[3px] text-amber-400">
              04
            </p>
            <h3 className="font-titleFont text-xl font-semibold text-gray-900 dark:text-white">
              Sự chuyên nghiệp
            </h3>
            <p className="text-sm text-gray-600 dark:text-darkText leading-6">
              Từ những chi tiết nhỏ nhất. Được tạo ra bởi phong thái làm việc, tiếp
              xúc khách hàng và sản xuất dự án.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[3px] text-sky-500">
              05
            </p>
            <h3 className="font-titleFont text-xl font-semibold text-gray-900 dark:text-white">
              Kỷ luật
            </h3>
            <p className="text-sm text-gray-600 dark:text-darkText leading-6">
              Giới hạn “đặc biệt” của dân sáng tạo. Chuẩn mực giúp CellVn Solution tạo ra
              những thành công khác biệt.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[3px] text-emerald-500">
              06
            </p>
            <h3 className="font-titleFont text-xl font-semibold text-gray-900 dark:text-white">
              Đam mê
            </h3>
            <p className="text-sm text-gray-600 dark:text-darkText leading-6">
              Chính là khởi nguồn tạo ra CellVn Solution và ngọn lửa đam mê này sẽ tiếp
              tục được duy trì mãi mãi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="border border-borderColor/60 hover:border-secondaryColor/50 transition-colors duration-300 flex flex-col items-center text-center p-6"
            >
              <div className="w-24 h-24 rounded-full bg-secondaryColor/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-secondaryColor">
                  {member.name
                    .split(" ")
                    .slice(-1)[0]
                    ?.charAt(0) || "?"}
                </span>
              </div>
              <h3 className="font-titleFont text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-secondaryColor mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 dark:text-darkText leading-6">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-8 text-gray-700 dark:text-darkText text-sm leading-7">
          <section className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2 space-y-2">
              <h3 className="font-titleFont text-base font-semibold text-gray-900 dark:text-white mb-2">
                Đề cao tinh thần Teamwork
              </h3>
              <p>
                CellVn Solution với tính chất đặc thù của agency, thực hiện các dịch vụ
                “Full Service”. Vì thế, để mỗi dự án được thực thi và vận hành
                thành công sẽ cần sự kết hợp của rất nhiều bộ phận khác nhau.
              </p>
              <p>
                Bên cạnh việc khuyến khích các cá nhân tự do sáng tạo, phát huy
                thế mạnh vốn có, chúng tôi rất chú trọng đến kỹ năng làm việc
                nhóm, tạo điều kiện để các thành viên “tỏa sáng” cùng nhau.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={aboutUsImgOne}
                alt="Đội ngũ phối hợp triển khai dự án"
                className="w-full h-auto rounded-md object-cover border border-borderColor/40"
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="md:w-1/2 space-y-2">
              <h3 className="font-titleFont text-base font-semibold text-gray-900 dark:text-white mb-2">
                Làm hết sức, Chơi hết mình
              </h3>
              <p>
                Hằng năm, Cellvn Solution tổ chức những kỳ tham quan, nghỉ dưỡng
                ở những địa điểm thú vị.
              </p>
              <p>
                Đây cũng là lúc các thành viên “bung xõa” hết mình sau những
                ngày làm việc vất vả và chăm chỉ. “Sức trẻ” từ tinh thần chính
                là điểm mạnh của CellVn Solution để mỗi cuộc vui luôn hào hứng bất tận
                và từ đó sự gắn kết giữa các thành viên trở nên keo sơn hơn.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={aboutUsImgTwo}
                alt="Hoạt động gắn kết, tham quan nghỉ dưỡng"
                className="w-full h-auto rounded-md object-cover border border-borderColor/40"
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/2 space-y-2">
              <h3 className="font-titleFont text-base font-semibold text-gray-900 dark:text-white mb-2">
                Và thêm nhiều những đặc quyền khác...
              </h3>
              <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="font-semibold">
                  Sẵn lòng đào tạo cho các “tân binh”.
                </span>{" "}
                Chúng tôi luôn “rộng cửa” đón chào những thành viên mới, đầy
                nhiệt huyết và tinh thần cầu tiến ngay từ lúc các bạn chưa tốt
                nghiệp ĐH, CĐ.
              </li>
              <li>
                <span className="font-semibold">
                  Cơ hội tăng thu nhập sau giờ làm (Overtime Work).
                </span>{" "}
                Chúng tôi tạo điều kiện để các bạn có thể sử dụng quỹ thời gian
                ngoài giờ một cách hợp lý nhất để hoàn thành những job cộng
                thêm.
              </li>
              <li>
                <span className="font-semibold">
                  Nhận cộng tác viên với chính sách hấp dẫn.
                </span>{" "}
                Bạn yêu thích công việc freelancer và có thể hoàn thành mọi yêu
                cầu chất lượng và đúng hẹn. Inbox ngay cho CellVn Solution nhé.
              </li>
              <li>
                <span className="font-semibold">
                  Tham gia các buổi party thú vị.
                </span>{" "}
                Gắn kết qua các buổi tiệc sinh nhật ấm cúng, year end party sum
                vầy là một nét đẹp tại ngôi nhà chung của CellVn Solution.
              </li>
              <li>
                <span className="font-semibold">
                  Hỗ trợ chi phí trau dồi kiến thức.
                </span>{" "}
                Hết lòng ủng hộ tinh thần cầu tiến và ham học để phát triển bản
                thân của mỗi thành viên bằng cách hỗ trợ mức chi phí phù hợp.
              </li>
              <li>
                <span className="font-semibold">Ngày nghỉ và ngày phép.</span>{" "}
                Bạn có thể sử dụng những “ngày nghỉ” quyền lực để sắp xếp thêm
                các công việc cá nhân hay những vấn đề đột xuất.
              </li>
              </ol>
            </div>
            <div className="md:w-1/2">
              <Image
                src={aboutUsImgThree}
                alt="Môi trường với nhiều đặc quyền cho thành viên"
                className="w-full h-auto rounded-md object-cover border border-borderColor/40"
              />
            </div>
          </section>

          <p className="text-center text-sm text-gray-500 dark:text-darkText pt-4">
            Bạn muốn làm việc cùng chúng tôi?{" "}
            <Link
              href="/contact"
              className="text-secondaryColor hover:underline"
            >
              Liên hệ ngay
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
