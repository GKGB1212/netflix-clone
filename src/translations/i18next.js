import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translations from './translations'

i18next.use(initReactI18next).init({
    lng: "en", //Default language.
    fallbackLng: "vn",//Language that will be loaded in case the translations the user is looking for are not available.
    interpolation: {
        escapeValue: true,
    },
    resources: translations,
})

export default i18next;