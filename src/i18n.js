import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// const resources = {
//     tr: {
//         translation: {
//             "anasayfa": "Anasayfa"
//         }
//     },
//     en: {
//         translation: {
//             "anasayfa": "Home"
//         }
//     }
// }

i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
        lng: 'tr',
        // debug: true,
        // resources: resources
    });

export default i18n;