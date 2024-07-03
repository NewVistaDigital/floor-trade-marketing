// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// N.B. THIS FILE IS IMPORTED IN BOTH SERVER- AND CLIENT-SIDE CODE.
// THINK TWICE BEFORE ADDING STUFF AS IT WILL GET SHIPPED TO THE CLIENT.

import { slugify } from "./utils/slugify";

export const SITE_TITLE = "Floor Trade Marketing";
export const SITE_DESCRIPTION =
  "We offer premium digital marketing, website design, local SEO, and ads for Flooring Companies and Flooring Suppliers.";
export const SITE_URL = "https://floortrademarketing.com/";
export const SITE_EMAIL = "webmaster@newvistadigital.com";
export const SITE_PHONE = "(719) 639-1470";
export const SITE_PHONE_HREF = "tel:7196391470";
export const SITE_DEFAULT_IMAGE = "/floortrader.png";
export const SITE_UTM_SOURCE = slugify(SITE_TITLE);

export const UI_THEME = "light"; // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

export const DISABLE_INDEXING = false;

export const ANALYTICS_GA4 = "G-M0JW39ZSCL";
