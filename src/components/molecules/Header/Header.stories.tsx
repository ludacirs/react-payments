import React from "react";
import Header from "./Header";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/Header",
  component: Header,
} as Meta;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const AddCardMainHeader = Template.bind({});
AddCardMainHeader.args = {
  backButton: true,
  title: "카드 추가",
};
export const MainHeader = Template.bind({});
MainHeader.args = {
  backButton: false,
  title: "보유카드",
};
