import React from 'react';
import Test, {TestProps} from './Test';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Atoms/Test',
  component: Test,
} as Meta;

const Template: Story<TestProps> = args => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {};