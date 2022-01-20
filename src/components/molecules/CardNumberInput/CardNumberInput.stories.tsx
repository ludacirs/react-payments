import React from "react";
import CardNumberInput from "./CardNumberInput";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/CardNumberInput",
  component: CardNumberInput,
} as Meta;

const Template: ComponentStory<typeof CardNumberInput> = (args) => <CardNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
