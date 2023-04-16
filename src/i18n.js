import i18n from "i18next";
import enFail from "./i18n/en.json";
import eeFail from "./i18n/ee.json";
import ruFail from "./i18n/ru.json";
import deFail from "./i18n/de.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: enFail,
  },

  ee: {
    translation: eeFail,
  },
  ru: {
    translation: ruFail,
  },
  de: {
    translation: deFail,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
