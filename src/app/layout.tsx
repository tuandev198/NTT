import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/ui/Layout";
import Script from "next/script";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Đối tác kinh doanh trực tuyến",
  description:
    "Giải pháp thiết kế & phát triển website, hosting và tối ưu SEO cho doanh nghiệp.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  ),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Đối tác kinh doanh trực tuyến",
    description:
      "Giải pháp thiết kế & phát triển website, hosting và tối ưu SEO cho doanh nghiệp.",
    url: "/",
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ReactBD",
    url: siteUrl,
    email: "reactjsbd@gmail.com",
  };

  return (
    <html lang="vi">
      <body className={beVietnamPro.className}>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
