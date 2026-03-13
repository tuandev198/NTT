import type { Metadata } from "next";
import Container from "@/ui/Container";
import TitleBanner from "@/ui/TitleBanner";
import { projectsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "Dự án đã thiết kế",
  description:
    "Danh sách các website/dự án CellVn Solution đã thiết kế và triển khai. Bấm vào từng dự án để xem chi tiết.",
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    title: "Dự án đã thiết kế",
    description:
      "Danh sách các website/dự án CellVn Solution đã thiết kế và triển khai. Bấm vào từng dự án để xem chi tiết.",
    url: `${siteUrl}/projects`,
    locale: "vi_VN",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <Container className="pt-0">
      <TitleBanner
        subtitle="Portfolio"
        title="Website đã thiết kế"
        className="mdl:pb-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10 my-10">
        {projectsData.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project._id}`}
            className="group w-full h-auto border border-borderColor border-opacity-30 hover:border-secondaryColor/60 transition-colors duration-300"
          >
            <div className="w-full h-72 overflow-hidden border-b border-b-borderColor">
              <Image
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <h3 className="font-titleFont text-base uppercase tracking-wider text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-darkText leading-6">
                {project.des}
              </p>
              <p className="text-sm font-semibold text-secondaryColor">
                Xem chi tiết →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

