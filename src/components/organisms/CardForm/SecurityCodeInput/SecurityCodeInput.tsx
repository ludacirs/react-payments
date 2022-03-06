import React from "react";
import styled from "styled-components";
import InputContainer from "@molecules/InputContainer/InputContainer";
import Input from "@atoms/Input/Input";

interface SecurityCodeInputProps {}

const SecurityCodeInput = ({}: SecurityCodeInputProps) => {
  return (
    <>
      <InputContainer width={125} label={"보안코드(CVC/CVV)"}>
        <Input letterLimit={3} type={"password"} />
      </InputContainer>
    </>
  );
};

export default SecurityCodeInput;
