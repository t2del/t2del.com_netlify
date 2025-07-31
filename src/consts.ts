import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  SITE_URL: "https://www.t2del.com",
  NAME: "Dennis Macapagal",
  EMAIL: "macapagal.dennis@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
  PHONE_NUM: 88140252,
  ICON: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3.25-3H6.75V4h10.5z"/></svg>',
  // WP_BLOG_LIST: "https://t2del-azure-wp.azurewebsites.net/wp-json/wp/v2/posts?_embed",
  // WP_BLOG_POST: "https://t2del-azure-wp.azurewebsites.net/wp-json/wp/v2/posts",
  WP_BLOG_LIST: "https://denn-block.instawp.xyz/wp-json/wp/v2/posts?_embed",
  WP_BLOG_POST: "https://denn-block.instawp.xyz/wp-json/wp/v2/posts",
};

export const HOME: Metadata = {
  TITLE: " ",
  DESCRIPTION: " is a minimal and lightweight blog and portfolio.",
};

export const NOTFOUND: Metadata = {
  TITLE: "404 | Not Found",
  DESCRIPTION: " Missing something!",
};

export const CONTACTS: Metadata = {
  TITLE: "Contact Me |",
  DESCRIPTION: " is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog |",
  DESCRIPTION: "A collection of blog on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work |",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects |",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "facebook",
    HREF: "https://www.facebook.com/t2del",
    ICON: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"/></svg>'
  },
  { 
    NAME: "x",
    HREF: "https://twitter.com/t2del",
    ICON: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M17.316 6.246q.011.244.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.58 7.58 0 0 0 5.588-1.562a3.78 3.78 0 0 1-3.526-2.621a3.86 3.86 0 0 0 1.705-.065a3.78 3.78 0 0 1-3.028-3.703v-.047a3.8 3.8 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.72 10.72 0 0 0 7.781 3.945a3.8 3.8 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.6 7.6 0 0 0 2.397-.916a3.8 3.8 0 0 1-1.66 2.088a7.6 7.6 0 0 0 2.168-.594a7.6 7.6 0 0 1-1.884 1.953"/></svg>'
  },
  { 
    NAME: "github",
    HREF: "https://github.com/t2del",
    ICON: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799m4.526-4.683c.149-.365.155-2.439-.635-4.426c0 0-1.811.199-4.551 2.08c-.575-.16-1.548-.238-2.519-.238c-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002l1.732-.002c1.506 0 7.467-.115 7.467-7.301c0-1.652-.566-2.863-1.494-3.871m-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115c0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531c.735.676 1.045 1.49 1.045 2.369c0 3.666-2.937 4.115-6.709 4.115m-3.207-5.606c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.301-.807 1.301-1.801c0-.992-.582-1.799-1.301-1.799"/></svg>'
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/dennismacapagal",
    ICON: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z"/></svg>'
  },
  { 
    NAME: "resume",
    HREF: "https://docs.google.com/document/d/1A8VE6jIIv6r9vaGmvHT9hDhajwXAsImz/edit?usp=share_link&ouid=116872466953417214421&rtpof=true&sd=true",
    ICON: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 22q-.691 0-1.153-.462T3 20.385V8h1v12.385q0 .23.192.423t.423.192H14v1zm4-4q-.691 0-1.153-.462T7 16.384V3.616q0-.691.463-1.153T8.616 2H15.5L20 6.5v9.885q0 .69-.462 1.153T18.384 18zM15 7h4l-4-4z"/></svg>'
  }
];
