import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group px-3 py-2 text-xs md:text-sm font-medium rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-gray-600 hover:border-[#fc440f]"
      aria-label="Toggle language"
    >
      <span className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#FAD4D8] group-hover:to-[#FC440F] transition-all duration-300">
        {i18n.language === "en" ? "ES" : "EN"}
      </span>
    </button>
  );
}
