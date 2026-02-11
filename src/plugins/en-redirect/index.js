import React from 'react';

export default function enRedirectPlugin() {
  return {
    name: 'en-redirect',
    async contentLoaded({ actions }) {
      const { addRoute } = actions;

      addRoute({
        path: '/en/*',
        component: '@site/src/plugins/en-redirect/redirect.js',
        exact: false,
      });
    },
  };
}
