const nextTranslate = require('next-translate');

module.exports = {
  basePath: process.env.BASE_PATH,
  ...nextTranslate({
    poweredByHeader: false,
    nextConfig: {
      reactStrictMode: true,
    },
    experimental: {
      outputStandalone: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  }),
  i18n: undefined,
};
