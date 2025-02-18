// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationAR from "../locales/ar/translation.json";
import translationFR from "../locales/fr/translation.json";

// Define the resources (translations) by language
const resources = {
  fr: { translation: translationFR },
  ar: { translation: translationAR },
};

// Initialize i18n
i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "fr", // Set default language to Arabic (or 'fr' for French if preferred)
    fallbackLng: "ar", // Fallback language if translation not found
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
