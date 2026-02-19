import React from 'react';

export default function enRedirectPlugin(context) {
  const currentLocale = context?.i18n?.currentLocale;

  return {
    name: 'en-redirect',
    async contentLoaded({ actions }) {
      if (currentLocale !== 'en') {
        return;
      }

      const { addRoute } = actions;

      addRoute({
        path: '/en/*',
        component: '@site/src/plugins/en-redirect/redirect.js',
        exact: false,
      });
    },
  };
}
