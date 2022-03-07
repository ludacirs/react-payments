import React from "react";
import InputContainer from "@molecules/InputContainer/InputContainer";
import Input from "@atoms/Input/Input";

interface PasswordInputProps {}

const PasswordInput = ({}: PasswordInputProps) => {
  return (
    <>
      <InputContainer width={200} label={"카드 비밀번호"} wrapper={false}>
        <Input letterLimit={1} type={"password"} />
        <Input letterLimit={1} type={"password"} />
        {/*<Input letterLimit={1} type={"password"} backgroundColor={"none"} value={"*"} readOnly />*/}
        {/*<Input letterLimit={1} type={"password"} backgroundColor={"none"} value={"*"} readOnly />*/}
      </InputContainer>
    </>
  );
};

export default PasswordInput;
