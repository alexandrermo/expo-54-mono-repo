
import type {  StoryObj } from '@storybook/react-native-web-vite';
import { ExternalLink } from './external-link';

const meta = {
  title: 'Components/ExternalLink',
  component: ExternalLink,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   href: "https://docs.expo.dev/router/introduction",
   children: 'Link'
  },
};
