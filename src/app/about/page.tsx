import Designing from "@/ui/Designing";
import TitleBanner from "@/ui/TitleBanner";
import React from "react";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu về đội ngũ, quy trình và cách chúng tôi thiết kế – phát triển website tối ưu cho doanh nghiệp.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "Giới thiệu",
    description:
      "Giới thiệu về đội ngũ, quy trình và cách chúng tôi thiết kế – phát triển website tối ưu cho doanh nghiệp.",
    url: `${siteUrl}/about`,
    locale: "vi_VN",
    type: "website",
  },
};

const AboutUs = () => {
  return (
    <div>
      <TitleBanner subtitle="Tìm hiểu thêm về chúng tôi" title="Về dịch vụ" />
      <Designing />
    </div>
  );
};

export default AboutUs;
