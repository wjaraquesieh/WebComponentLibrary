import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Image from './Image';
import { ImageProps } from './Image.types';

export default {
  title: 'UI/Image',
  component: Image,
  argTypes: {
    disabled: { control: 'boolean' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  src: 'https://via.placeholder.com/150',
  alt: 'Sample Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
};
