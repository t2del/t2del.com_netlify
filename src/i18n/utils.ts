// src/i18n/utils.ts (Updated)

// Remove the import from 'astro:i18n'
// import { getI18n, type I18nConfig } from 'astro:i18n'; 

// Define a type for your i18n config properties if needed, 
// or get them from Astro.locals/Astro.url directly.

// We need the defaultLocale to correctly strip prefixes.
interface LocaleConfig {
    defaultLocale: string;
    currentLocale: string;
    prefixDefaultLocale: boolean;
}

// Update the function signature to accept the necessary config details
export function stripLocaleFromPathname(pathname: string, config: LocaleConfig): string {
  const { currentLocale, defaultLocale, prefixDefaultLocale } = config;

  if (defaultLocale === currentLocale && !prefixDefaultLocale) {
    // If it's the default locale and not prefixed, the path is already locale-less
    return pathname;
  }

  // Remove the current locale prefix, if it exists
  const regex = new RegExp(`^/${currentLocale}`);
  
  // Ensure the path is returned with a leading slash, or is '/' for the root
  return pathname.replace(regex, '') || '/';
}