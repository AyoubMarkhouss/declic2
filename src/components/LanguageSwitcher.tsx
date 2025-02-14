import { useState, useEffect } from "react";
import { useTranslation } from "../context/TranslationContext";
import { FiChevronDown } from "react-icons/fi";
import { LuGlobe } from "react-icons/lu";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width threshold as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  // Toggle dropdown for mobile devices (or any click event)
  const toggleDropdown = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative -mr-5 tablet:-mr-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main button: now clickable via onClick for mobile */}
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
