import type { Site, SocialObjects } from './types';

export const SITE: Site = {
  website: 'https://raymondluong.com',
  author: 'Raymond Luong',
  desc: 'Front end and design systems engineer based in San Francisco.',
  title: 'Raymond Luong',
  ogImage: 'profile.jpg',
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOGO_IMAGE = {
  enable: true,
  width: 70,
  height: 70,
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://www.github.com/raymondluong',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/raymondluong',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com/luongraymond',
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
