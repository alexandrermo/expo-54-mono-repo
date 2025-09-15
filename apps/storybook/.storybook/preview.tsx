

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        highContrast: { name: 'highContrast', value: '#0045B5' },
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
