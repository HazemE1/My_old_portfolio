import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export default async function I18() {
    if (i18next.isInitialized)
        return true

    await i18next
        .use(Backend)
        .use(initReactI18next)
       // .use(LanguageDetector)
        .init({
            fallbackLng: "sv",
            debug: true,
            interpolation: {
                escapeValue: false
            },
            react: {
                bindI18n: 'languageChanged',
                bindI18nStore: '',
                transEmptyNodeValue: '',
                transSupportBasicHtmlNodes: true,
                useSuspense: true
            },
            backend: {}
        });

    return true;
}