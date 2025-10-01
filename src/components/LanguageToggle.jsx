// src/components/LanguageToggle.jsx

import React, { useState } from 'react';

// Define the available locales and their display names
const ALL_LOCALES = ['en', 'es'];
const LOCALE_LABELS = {
    'en': 'English',
    'es': 'Español',
};

// This component is an island and will be hydrated on the client.
export default function LanguageToggle({ currentLocale, allLocales, prefixDefault }) {
  const [isOpen, setIsOpen] = useState(false);

  const getNewLocalePath = (locale) => {
    // 1. Get the current URL path *without* the current locale prefix
    let basePath = window.location.pathname;

    // Remove the current locale prefix from the path
    if (currentLocale !== ALL_LOCALES[0] || prefixDefault) {
      const regex = new RegExp(`^/${currentLocale}`);
      basePath = basePath.replace(regex, '') || '/';
    }

    // 2. Construct the new locale path
    const defaultLocale = ALL_LOCALES[0];

    if (locale === defaultLocale && !prefixDefault) {
      return basePath;
    }
    
    return `/${locale}${basePath}`;
  };

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    if (newLocale) {
      window.location.href = getNewLocalePath(newLocale);
    }
  };

  return (
    <div className="language-toggle">
      {/* 1. Click-to-Show (Button) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-expanded={isOpen}
        aria-controls="language-list"
        className="current-lang-button"
      >
        {LOCALE_LABELS[currentLocale]} ▼
      </button>

      {/* 2. Select-to-Change (Dropdown) - conditionally rendered */}
      {isOpen && (
        <div id="language-list" className="dropdown-container">
          <select onChange={handleLanguageChange} value={currentLocale} size={allLocales.length}>
            {allLocales.map((locale) => (
              <option key={locale} value={locale}>
                {LOCALE_LABELS[locale]}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}