import React from "react";
import Label from "./Label";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Label",
  component: Label,
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  children: <input style={{ width: `200px` }} />,
  title: "Title",
};

export const CountLabel = Template.bind({});
CountLabel.args = {
  children: <input style={{ width: `200px` }} />,
  title: "Title",
  letterLimit: 30,
  currentLetter: 0,
};
