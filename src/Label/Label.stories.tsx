import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    htmlFor: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: 'Label Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Label',
};
