import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Dịch vụ thiết kế UI/UX, phát triển website, tên miền, hosting, bảo trì và tối ưu SEO cho doanh nghiệp.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Dịch vụ",
    description:
      "Dịch vụ thiết kế UI/UX, phát triển website, tên miền, hosting, bảo trì và tối ưu SEO cho doanh nghiệp.",
    url: `${siteUrl}/services`,
    locale: "vi_VN",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
