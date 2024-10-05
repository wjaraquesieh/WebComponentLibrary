import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<{ disabled: boolean; children: string }> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: 'Click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'I am disabled',
};
