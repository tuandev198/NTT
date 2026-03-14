"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";

import Link from "next/link";
import SideNav from "./SideNav";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";

const navigation = [
  { title: "Trang chủ", link: "/" },
  { title: "Giới thiệu", link: "/about" },
  { title: "Dịch vụ", link: "/services" },
  { title: "Dự án", link: "/projects" },
  { title: "Đội ngũ", link: "/team" },
  { title: "Hỏi đáp", link: "/faq" },
  { title: "Blog", link: "/blog" },
  { title: "Liên hệ", link: "/contact" },
];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const pathname = usePathname();

  const [navSize, setNavSize] = useState("90px");

  const listenScrollEvent = () => {
    setNavSize("90px");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav
        style={{ height: navSize, transition: "all 0.3s" }}
        className="w-full h-[90px] bg-white dark:bg-primaryColor border-b border-gray-200 dark:border-transparent fixed top-0 z-50 px-4 nav"
      >
        <div className="w-full h-[90px]">
          <header className="max-w-screen-2xl mx-auto text-gray-900 dark:text-white flex items-center justify-between h-full overflow-hidden">
            {/* ================= Header logo start here ================= */}
            <Link href="/" className="font-titleFont text-xl font-bold tracking-wide text-gray-900 dark:text-white">
              CellVn Solution
            </Link>
            {/* ================= Header logo end here =================== */}
            {/* ================= Header Nav Link start here =================== */}
            <div className="relative flex items-center gap-4">
              {/* <ThemeToggle /> */}
              <div className="hidden lgl:flex items-center gap-6 xl:gap-12 uppercase font-titleFont tracking-[3px] text-[14px] font-semibold text-gray-900 dark:text-white">
                {navigation?.map((item) => (
                  <Link
                    key={item?.title}
                    href={item?.link}
                    className="relative px-3 group hover:cursor-pointer overflow-hidden py-1"
                  >
                    {item?.title}
                    <span
                      className={`w-full h-[2px] group-hover:bg-secondaryColor absolute left-0 bottom-0 translate-y-[1px] transition-hover duration-100 ${
                        item?.link === pathname && "bg-secondaryColor"
                      }`}
                    ></span>
                    <span
                      className={`w-[2px] h-[10px] group-hover:bg-secondaryColor absolute left-0 bottom-0 -translate-x-[1px] transition-translate duration-100 ${
                        item?.link === pathname && "bg-secondaryColor"
                      }`}
                    ></span>
                  </Link>
                ))}
              </div>
              {/* ================== Header Small Icon start here ================== */}

            <div
              onClick={() => setToggleNav(!toggleNav)}
              className="relative text-2xl w-11 h-11 lgl:hidden flex flex-col gap-[6px] border-b-[1px] border-b-secondaryColor border-t-[1px] text-gray-900 dark:text-white border-t-secondaryColor items-center justify-center group hover:cursor-pointer overflow-hidden"
            >
                {toggleNav ? (
                  <AiOutlineClose onClick={() => setToggleNav(!toggleNav)} />
                ) : (
                  <CgMenuRight onClick={() => setToggleNav(!toggleNav)} />
                )}
                <span className="h-full w-[1px] bg-secondaryColor inline-block absolute right-0 translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="h-full w-[1px] bg-secondaryColor inline-block absolute left-0 -translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
              </div>

              {/* ================== Header Small Icon end here ==================== */}
            </div>
            {/* ================= Header Nav Link end here ====================== */}
            {/* ================= Header Emergency start here =================== */}

            <div
              onClick={() => setShowSideNav(!showSideNav)}
              className="relative hidden text-xl w-11 h-11 lgl:flex flex-col gap-[6px] border-b-[1px] border-b-gray-500 dark:border-b-gray-500 border-t-[1px] border-t-gray-500 dark:border-t-gray-500 items-center justify-center group hover:cursor-pointer overflow-hidden menuBtn"
            >
              {!showSideNav ? (
                <>
                  <span className="w-5 h-[1px] inline-flex bg-gray-900 dark:bg-white"></span>
                  <span className="w-5 h-[1px] inline-flex bg-gray-900 dark:bg-white"></span>
                  <span className="w-5 h-[1px] inline-flex bg-gray-900 dark:bg-white"></span>
                </>
              ) : (
                <MdClose className="text-xl text-red-500" />
              )}

              <span className="h-full w-[1px] bg-gray-500 inline-block absolute right-0 translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="h-full w-[1px] bg-gray-500 inline-block absolute left-0 -translate-y-8 group-hover:translate-y-0 transition-transform duration-300"></span>
            </div>

            {/* ================= Header Emergency end here ===================== */}
          </header>
          {showSideNav && (
            <div className="absolute right-0 translate-x-[100%]">
              <SideNav />
            </div>
          )}
        </div>
      </nav>
      {/* ================= Navlink small screen start here ============= */}
      {toggleNav && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn easeOut",
          }}
          className="w-full py-6 px-4 top-0 mt-20 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-transparent fixed inline-block lgl:hidden text-gray-900 dark:text-white/80"
        >
          <ul className="w-full flex flex-col gap-2 font-titleFont uppercase text-sm">
            <Link href="/">
              <li
                onClick={() => setToggleNav(false)}
                className=" w-full px-3 hover:cursor-pointer py-1 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500"
              >
                Trang chủ
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setToggleNav(false)}
                className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500"
              >
                Giới thiệu
              </li>
            </Link>
            <Link onClick={() => setToggleNav(false)} href="/services">
              <li className="px-3 hover:cursor-pointer flex items-center gap-1 py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                Dịch vụ
              </li>
            </Link>
             <Link onClick={() => setToggleNav(false)} href="/projects">
              <li className="px-3 hover:cursor-pointer flex items-center gap-1 py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                Dự án
              </li>
            </Link>
            <Link href="/faq">
              <li className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                Hỏi đáp
              </li>
            </Link>
            <Link href="/blog">
              <li className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                Blog
              </li>
            </Link>
            <Link href="/team">
              <li
                onClick={() => setToggleNav(false)}
                className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500"
              >
                Đội ngũ
              </li>
            </Link>
            <Link onClick={() => setToggleNav(false)} href="/contact">
              <li className="px-3 hover:cursor-pointer py-2 border-b-[1px] border-b-borderColor hover:text-secondaryColor hover:border-b-secondaryColor transition-hover duration-500">
                Liên hệ
              </li>
            </Link>
          </ul>
        </motion.div>
      )}
      {/* ================= Navlink small screen end here =============== */}
    </>
  );
};

export default Header;
