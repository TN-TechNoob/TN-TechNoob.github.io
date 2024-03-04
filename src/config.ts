// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "塔可努的個人網站";
export const SITE_DESCRIPTION =
  "歡迎來到塔可努的網站";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "塔可努";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
