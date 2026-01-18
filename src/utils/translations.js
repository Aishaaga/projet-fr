import fr from '../locales/fr.json';
import en from '../locales/en.json';

const translations = {
  fr,
  en
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language] || translations.fr;
  
  for (const k of keys) {
    value = value?.[k];
    if (!value) {
      // Fallback to French if key not found
      value = translations.fr;
      for (const k2 of keys) {
        value = value?.[k2];
      }
      break;
    }
  }
  
  return value || key;
};

export const translate = (language, key, params = {}) => {
  let translation = getTranslation(language, key);
  
  // Replace placeholders like {name}, {count}, etc.
  Object.keys(params).forEach(param => {
    translation = translation.replace(`{${param}}`, params[param]);
  });
  
  return translation;
};
