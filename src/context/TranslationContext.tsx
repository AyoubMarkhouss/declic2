import { createContext, useContext, useState } from "react";
import { translations } from "../translations";

type Language = keyof typeof translations; // "en" | "fr"
type Translations = typeof translations.en;

interface TranslationContextType {
  t: Translations;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType>({
  t: translations.en,
  language: "en",
  setLanguage: () => {},
});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
