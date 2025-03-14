import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";


import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";


const userLocale = navigator.language.startsWith("es") ? "es" : "en";
const messages = userLocale === "es" ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={userLocale} messages={messages}>
    <JobsList locale={userLocale} />
  </IntlProvider>,
  document.getElementById("root")
);
