"use client";

import Link from "next/link";
import { BsChatDotsFill } from "react-icons/bs";

export default function FloatingContact() {
  return (
    <Link
      href="/contact"
      aria-label="Liên hệ"
      className="w-12 h-12 rounded-full bg-secondaryColor text-white flex items-center justify-center shadow-lg shadow-black/30 hover:brightness-110 transition-all duration-300"
      title="Liên hệ"
    >
      <BsChatDotsFill className="text-xl" />
    </Link>
  );
}

