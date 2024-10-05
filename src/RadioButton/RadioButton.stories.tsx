import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'UI/RadioButton',
  component: RadioButton,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  checked: false,
  label: 'Option 1',
  name: 'options',
  value: '1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: false,
  label: 'Disabled Option',
  name: 'options',
  value: '1',
};
