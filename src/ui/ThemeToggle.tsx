"use client";

import { useTheme } from "@/context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-md border border-gray-300 dark:border-borderColor hover:border-secondaryColor hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-300"
      aria-label={theme === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
    >
      {theme === "dark" ? (
        <BsSun className="text-lg text-white" title="Chế độ sáng" />
      ) : (
        <BsMoon className="text-lg text-gray-800" title="Chế độ tối" />
      )}
    </button>
  );
}
