export type Site = {
  SITE_URL: string;
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_PROECTS: number;
  PHONE_NUM: number;
  ICON: string;
  WP_BLOG_LIST: string;
  WP_BLOG_POST: string;
};
export type Language = 'EN' | 'ES'; // add more languages as needed

// Metadata Types
export type MetadataFields = {
  TITLE?: string;
  DESCRIPTION?: string;
};
export type Metadata = Record<Language, MetadataFields>;
// Metadata Types

// Navigation Types
export type NavItemProps = {
  TITLE: string;
  URL: string;
  // Add more properties if needed
};
export type NavItems = {
  HOME: NavItemProps;
  PROJECTS: NavItemProps;
  BLOG: NavItemProps;
  // Add more NavItems if needed
};
export type Navigation = Record<Language, NavItems>;
// Navigation Types


export type TranslateItemsProps = {
  TITLE: string;
  // Add more properties if needed
};
export type TranslateItems = {
  WorkExperience: TranslateItemsProps;
  RecentProjects: TranslateItemsProps;
  LetConnect: TranslateItemsProps;
  // Add more TranslateItems if needed
};
export type FieldTranslate = Record<Language, TranslateItems>;

export type Socials = {
  NAME: string;
  HREF: string;
  ICON: string;
}[];
