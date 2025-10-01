import React, { useState } from 'react';
import "flag-icons/css/flag-icons.min.css";
// Import the Chevron-Down icon (a common choice from Heroicons)
// NOTE: You must have 'lucide-react' or similar icon library installed for this, 
// OR replace with a simple SVG string. We'll use a simple SVG path here.
const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);


// --- CONFIGURATION (Should match your i18n setup) ---
const LOCALE_TO_FLAG = {
    'en': 'us', // United States
    'es': 'es', // Spain
};
const ALL_LOCALES = Object.keys(LOCALE_TO_FLAG);
const LOCALE_LABELS = {
    'en': 'EN', // Keep names short for the button
    'es': 'ES',
};
// -----------------------------------------------------


export default function LanguageToggle({ currentLocale, allLocales, prefixDefault }) {
  const [isOpen, setIsOpen] = useState(false);

  // Utility to get the path without the current locale prefix
  const getNewLocalePath = (locale) => {
    let basePath = window.location.pathname;
    const defaultLocale = ALL_LOCALES[0];
    
    // Logic to strip the current locale prefix
    if (currentLocale !== defaultLocale || prefixDefault) {
      const regex = new RegExp(`^/${currentLocale}`);
      basePath = basePath.replace(regex, '') || '/';
    }

    // Logic to construct the new path
    if (locale === defaultLocale && !prefixDefault) {
      return basePath;
    }
    
    return `/${locale}${basePath}`;
  };

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    if (newLocale) {
      // Direct navigation when a language is selected
      window.location.href = getNewLocalePath(newLocale);
    }
  };

  // Flag utility component
  const Flag = ({ locale }) => {
    const flagCode = LOCALE_TO_FLAG[locale];
    // Uses the flag-icons library classes: fi (flag-icon) and fi-{country_code}
    return (
      <span 
        className={`fi fi-${flagCode} w-5 h-5 rounded-full shadow-md`}
        title={LOCALE_LABELS[locale]}
      ></span>
    );
  };

  return (
    <div className="relative inline-block text-left z-50">
      {/* 1. Click-to-Show Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="language-list"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
      >
        <Flag locale={currentLocale} />
        <span className="hidden sm:inline">{LOCALE_LABELS[currentLocale]}</span>
        <ChevronDown 
            className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* 2. Select-to-Change Dropdown (using a hidden select for simplicity in a drop-in component) */}
      {isOpen && (
        <div 
          id="language-list" 
          className="absolute right-0 mt-2 w-39 origin-top-right rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu" 
          aria-orientation="vertical"
        >
          {/* We will use a standard <ul>/<a> list for better styling and accessibility than a <select> in a dropdown */}
          <div className="py-1">
            {ALL_LOCALES.map((locale) => (
              <a
                key={locale}
                href={getNewLocalePath(locale)}
                className={`flex items-center gap-2 px-2 py-2 text-sm transition-colors duration-150 ${
                  locale === currentLocale
                    ? 'bg-indigo-50 text-indigo-700 font-semibold pointer-events-none'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
              >
                <Flag locale={locale} />
                {LOCALE_LABELS[locale]} - <span className="text-xs text-gray-500">{LOCALE_TO_FLAG[locale].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}