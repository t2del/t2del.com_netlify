import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "T2DEL",
  EMAIL: "macapagal.dennis@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: " is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/t2del",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/t2del"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/dennismacapagal",
  },
  { 
    NAME: "resume",
    HREF: "https://docs.google.com/document/d/1A8VE6jIIv6r9vaGmvHT9hDhajwXAsImz/edit?usp=share_link&ouid=116872466953417214421&rtpof=true&sd=true",
  }
];
