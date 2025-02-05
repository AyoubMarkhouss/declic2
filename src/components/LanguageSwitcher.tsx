import { useState, useRef } from "react";
import { useTranslation } from "../context/TranslationContext";
import { FiChevronDown } from "react-icons/fi";
import { LuGlobe } from "react-icons/lu";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Toggle dropdown for mobile devices (or any click event)
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="relative -mr-5 tablet:-mr-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main button: now clickable via onClick */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-300 transition"
      >
        <LuGlobe className="w-5 h-5" />
        <FiChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown menu with language options */}
      <div
        className={`absolute left-0 mt-2 w-20 bg-white border shadow-md overflow-hidden transform transition-all duration-200 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            setLanguage("en");
            setIsOpen(false);
          }}
          className={`w-full flex items-center justify-center px-4 py-2 hover:bg-gray-100 ${
            language === "en" ? "font-semibold text-redeclic" : ""
          }`}
        >
          🇺🇸
        </button>
        <button
          onClick={() => {
            setLanguage("fr");
            setIsOpen(false);
          }}
          className={`w-full flex items-center justify-center px-4 py-2 hover:bg-gray-100 ${
            language === "fr" ? "font-semibold text-redeclic" : ""
          }`}
        >
          🇫🇷
        </button>
      </div>
    </div>
  );
}
