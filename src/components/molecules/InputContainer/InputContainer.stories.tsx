import InputContainer from "./InputContainer";
import Input from "@atoms/Input/Input";

import { Meta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "molecules/InputContainer",
  component: InputContainer,
} as Meta;

const Template: ComponentStory<typeof InputContainer> = (args) => <InputContainer {...args} />;

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  label: "카드 번호",
  width: 350,
  children: (
    <>
      <Input letterLimit={4} type={"number"} />
      <Input letterLimit={4} type={"number"} />
      <Input letterLimit={4} type={"password"} />
      <Input letterLimit={4} type={"password"} />
    </>
  ),
};

export const ExpirationDateInput = Template.bind({});
ExpirationDateInput.args = {
  label: "만료일",
  width: 150,
  children: (
    <>
      <Input letterLimit={2} type={"number"} placeHolder={"MM"} />
      <div>/</div>
      <Input letterLimit={2} type={"number"} placeHolder={"YY"} />
    </>
  ),
};

export const OwnerInput = Template.bind({});
OwnerInput.args = {
  label: "카드 소유자 이름 (선택)",
  width: 350,
  letterLimit: 30,
  children: (
    <>
      <Input letterLimit={30} type={"text"} placeHolder={"카드에 표시된 이름과 동일하게 입력하세요."} />
    </>
  ),
};

export const SecurityCodeInput = Template.bind({});
SecurityCodeInput.args = {
  label: "보안 코드(CVC/CVV)",
  width: 100,
  children: (
    <>
      <Input letterLimit={3} type={"password"} />
    </>
  ),
};

export const CardPasswordInput = Template.bind({});
CardPasswordInput.args = {
  label: "카드 비밀번호",
  width: 200,
  wrapper: false,
  children: (
    <>
      <Input letterLimit={1} type={"password"} />
      <Input letterLimit={1} type={"password"} />
      <Input letterLimit={1} type={"password"} backgroundColor={"none"} initValue={"*"} readOnly />
      <Input letterLimit={1} type={"password"} backgroundColor={"none"} initValue={"*"} readOnly />
    </>
  ),
};
