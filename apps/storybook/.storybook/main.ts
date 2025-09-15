import type { StorybookConfig } from '@storybook/react-native-web-vite';

export const STORIES_PATHNAME = [
  '../../main/**/*.stories.@(js|jsx|ts|tsx|mdx)'
];

const main: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },

  stories: STORIES_PATHNAME,

  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-native-web-vite',
    options: {
      pluginReactOptions: {
        babel: {
          plugins: [
            '@babel/plugin-proposal-export-namespace-from',
            'react-native-worklets/plugin',
          ],
        },
      },
    },
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default main;
