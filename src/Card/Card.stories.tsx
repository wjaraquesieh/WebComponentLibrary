import React from 'react';
import { StoryFn, Meta } from '@storybook/react/types-6-0';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args}>Card Content</Card>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
