import React from "react";
import CardForm from "./CardForm";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Organisms/CardForm",
  component: CardForm,
} as Meta;

const Template: ComponentStory<typeof CardForm> = (args) => <CardForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
