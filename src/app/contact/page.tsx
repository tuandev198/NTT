import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ để nhận tư vấn thiết kế website, phát triển web/app, hosting và tối ưu SEO.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Liên hệ",
    description:
      "Liên hệ để nhận tư vấn thiết kế website, phát triển web/app, hosting và tối ưu SEO.",
    url: `${siteUrl}/contact`,
    locale: "vi_VN",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
