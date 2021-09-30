import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrimaryNav from './PrimaryNav';

export default {
  title: 'Atom/PrimaryNav',
  component: PrimaryNav,
} as ComponentMeta<typeof PrimaryNav>;

const Template: ComponentStory<typeof PrimaryNav> = (args) => (
  <PrimaryNav {...args} />
);

export const Default = Template.bind({});
Default.args = {};
