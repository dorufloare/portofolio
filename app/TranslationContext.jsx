import React, { createContext, useContext } from 'react';
import enMessages from '../public/locales/en/common.json';
import roMessages from '../public/locales/ro/common.json';

const messages = {
  en: enMessages,
  ro: roMessages,
};

const TranslationContext = createContext();

export const TranslationProvider = ({ locale, children }) => {
  const value = messages[locale] || messages['en'];
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};