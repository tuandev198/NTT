import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/ui/Container";
import TitleBanner from "@/ui/TitleBanner";
import { projectsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "@/ui/ContactUs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

function toYouTubeEmbedUrl(url: string) {
  try {
    const u = new URL(url);
    // youtu.be/<id>
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const id = Number(params.id);
  const project = projectsData.find((p) => p._id === id);
  if (!project) return {};

  return {
    title: project.title,
    description: project.des,
    alternates: { canonical: `${siteUrl}/projects/${project._id}` },
    openGraph: {
      title: project.title,
      description: project.des,
      url: `${siteUrl}/projects/${project._id}`,
      locale: "vi_VN",
      type: "article",
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const project = projectsData.find((p) => p._id === id);
  if (!project) return notFound();

  const embedUrl = toYouTubeEmbedUrl(project.link);

  return (
    <Container className="pt-0">
      <TitleBanner subtitle="Chi tiết dự án" title={project.title} />

      <div className="max-w-screen-lg mx-auto px-4 pb-10">
        <div className="border border-borderColor border-opacity-30 overflow-hidden">
          <Image
            className="w-full h-auto object-cover"
            src={project.image}
            alt={project.title}
          />
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <p className="text-base text-gray-700 dark:text-darkText leading-7">
            {project.des}
          </p>

          <div className="flex flex-col mdl:flex-row gap-4 items-start mdl:items-center">
            <Link
              href={project.link}
              target="_blank"
              className="text-secondaryColor underline underline-offset-4 decoration-[1px]"
            >
              Xem demo/video dự án
            </Link>
            <ContactUs buttonData="liên hệ" />
          </div>

          {embedUrl && (
            <div className="mt-4 w-full border border-borderColor border-opacity-30 overflow-hidden">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={embedUrl}
                  title={project.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div className="pt-4">
            <Link
              href="/projects"
              className="text-gray-900 dark:text-white hover:text-secondaryColor transition-colors duration-300"
            >
              ← Quay lại danh sách dự án
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

