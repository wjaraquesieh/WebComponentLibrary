import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  options: [
    { label: 'Option 1', value: '1', disabled: true },
    { label: 'Option 2', value: '2', disabled: true },
  ],
};
