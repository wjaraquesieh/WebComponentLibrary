import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: 'Sample text content.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled text content.',
};
