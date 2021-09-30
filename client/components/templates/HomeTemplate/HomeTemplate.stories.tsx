import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from '../../atoms/Banner';
import HomeTemplate from './HomeTemplate';
import { TobBarSkelton } from './HomeTemplateSkelton';

export default {
  title: 'Atom/PrimaryNav',
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  topBar: (
    <Banner>
      <TobBarSkelton />
    </Banner>
  ),
};
