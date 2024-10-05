import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'UI/HeroImage',
  component: HeroImage,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundImage: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args}>Hero Content</HeroImage>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  backgroundImage: 'https://via.placeholder.com/800x400',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  backgroundImage: 'https://via.placeholder.com/800x400',
};
