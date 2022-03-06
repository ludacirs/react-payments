import React from "react";
import Input from "./Input";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: `200px` }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  letterLimit: 30,
  placeHolder: "문자 입력 Input",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  letterLimit: 4,
  placeHolder: "숫자 입력 Input",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  letterLimit: 3,
  placeHolder: "비밀번호 입력 Input",
};
