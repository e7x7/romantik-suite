import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";
import "./index.scss";

import { TolgeeProvider } from "@tolgee/react";
import * as localEn from './i18n/en.json';
import * as localDe from './i18n/de-DE.json';
import * as localFr from './i18n/fr-FR.json';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TolgeeProvider
            staticData={{
                en: localEn,
                'de-DE': localDe,
                'fr-FR': localFr,
            }}
            loadingFallback={<>Loading...</>}
        >
            <App />
        </TolgeeProvider>
    </React.StrictMode >
);

