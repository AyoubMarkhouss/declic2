import { createContext, useContext, useState } from "react";
import { translations } from "../translations";

type Language = keyof typeof translations; // "en" | "fr"
type Translations = typeof translations.en;

interface TranslationContextType {
  t: Translations;
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Set default values to French ("fr")
const TranslationContext = createContext<TranslationContextType>({
  t: translations.fr,
  language: "fr",
  setLanguage: () => {},
});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Initialize with "fr" as the default language
  const [language, setLanguage] = useState<Language>("fr");
  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
