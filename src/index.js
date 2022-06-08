import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from 'react-router-dom'

import App from "./App";
import "./index.scss";

import { TolgeeProvider } from "@tolgee/react";
import * as localEn from './i18n/en.json';
import * as localDe from './i18n/de-DE.json';
import * as localFr from './i18n/fr-FR.json';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
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
        </BrowserRouter>
    </React.StrictMode >
);




//<TolgeeProvider
//filesUrlPrefix="i18n/"
//apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
//apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
//loadingFallback={<>Loading...</>}
//>
//<App />
//</TolgeeProvider>