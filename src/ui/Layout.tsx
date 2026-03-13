"use client";

import Footer from "./Footer";
import Header from "./Header";
import ScrollBtn from "./ScrollBtn";
import FloatingContact from "./FloatingContact";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-primaryColor dark:text-white font-bodyFont relative overflow-hidden transition-colors duration-300">
      <Header />
      {children}
      <div className="fixed bottom-6 right-6 z-50">
        <FloatingContact />
      </div>
      <div className="fixed bottom-6 right-20 z-50">
        <ScrollBtn />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
