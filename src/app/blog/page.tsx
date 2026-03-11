import Container from "@/ui/Container";
import TitleBanner from "@/ui/TitleBanner";
import React from "react";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Chia sẻ kiến thức về thiết kế website, phát triển, SEO và tối ưu hiệu năng cho doanh nghiệp.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "Blog",
    description:
      "Chia sẻ kiến thức về thiết kế website, phát triển, SEO và tối ưu hiệu năng cho doanh nghiệp.",
    url: `${siteUrl}/blog`,
    locale: "vi_VN",
    type: "website",
  },
};

const BlogPage = () => {
  return (
    <Container>
      <TitleBanner
        subtitle="Mở rộng góc nhìn"
        title="Tìm hiểu đúng nhu cầu của bạn"
        className="mdl:pb-0"
      />
      <div className="my-10 text-center">
        <p className="text-base text-gray-200">
          Nội dung blog sẽ được cập nhật sớm...
        </p>
      </div>
    </Container>
  );
};

export default BlogPage;
