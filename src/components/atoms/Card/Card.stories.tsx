import React from "react";
import Card from "./Card";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Card",
  component: Card,
} as Meta;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Name",
  month: "4",
  year: "95",
  brand: "shinhan",
};
