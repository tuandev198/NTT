import type { Metadata } from "next";
import FaqClient from "./FaqClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp",
  description:
    "Tổng hợp câu hỏi thường gặp về thiết kế website, phát triển, hosting và quy trình triển khai.",
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    title: "Câu hỏi thường gặp",
    description:
      "Tổng hợp câu hỏi thường gặp về thiết kế website, phát triển, hosting và quy trình triển khai.",
    url: `${siteUrl}/faq`,
    locale: "vi_VN",
    type: "website",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
