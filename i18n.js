module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    'rgx:^/donation': ['donation'],
    'rgx:^/about': ['about'],
    'rgx:^/faq': ['faq'],
    'rgx:^/terms-and-conditions': ['terms-and-conditions'],
    'rgx:^/privacy-policy': ['privacy-policy'],
    'rgx:^/all-networks': ['all-networks'],
  },
  loadLocaleFrom: (lang, ns) => require(`./public/locales/${lang}/${ns}.json`),
};
