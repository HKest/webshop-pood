import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      admin: "admin",
      contact: "contact",
      shops: "shops",
      cart: "cart",
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "add-products": "AddProducts",
      "maintain-products": "Maintain products",
      "edit-products": "Edit products",
      Cart: "Cart",
    },
  },
  ee: {
    translation: {
      admin: "admin",
      contact: "Kontaktid",
      shops: "Poed",
      cart: "Ostukorv",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-products": "Lisa toode",
      "maintain-products": "Halda tooteid",
      "edit-products": "Muuda tooteid",
      Cart: "Ostukorv",
    },
  },
  ru: {
    translation: {
      admin: "admin",
      contact: "Kontakti",
      shops: "Magazin",
      cart: "Ostukorv",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-products": "Lisa toode",
      "maintain-products": "Halda tooteid",
      "edit-products": "Muuda tooteid",
      Cart: "Ostukorv",
    },
  },
  de: {
    translation: {
      admin: "admin",
      contact: "Kontakte",
      shops: "Poed",
      cart: "Ostukorv",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-products": "Lisa toode",
      "maintain-products": "Halda tooteid",
      "edit-products": "Muuda tooteid",
      Cart: "Ostukorv",
    },
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
