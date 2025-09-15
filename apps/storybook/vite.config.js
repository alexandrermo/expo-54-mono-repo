
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        'expo-modules-core': 'expo-modules-core-storybok-web',
      },
    },
  };
});
