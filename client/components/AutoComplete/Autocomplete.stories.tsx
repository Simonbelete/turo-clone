import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Autocomplete from './Autocomplete';

export default {
  title: 'Molecules/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
);

export const Default = Template.bind({});
Default.args = {};
