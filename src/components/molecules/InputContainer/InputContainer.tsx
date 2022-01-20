import React from "react";
import styled from "styled-components";
import { flexBox } from "@styles/mixin";
import Label, { LabelProps } from "@atoms/Label/Label";

const InputContainerBlock = styled.div<Pick<InputContainerProps, "wrapper">>`
  ${flexBox()};
  width: inherit;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-radius: 0.25rem;
  ${({ wrapper }) => (wrapper ? `background-color: #ecebf1;` : `> * {margin-right: 5px;}`)}
`;

interface InputContainerProps extends LabelProps {
  width: number;
  wrapper?: boolean;
}

const InputContainer = ({ children, width, letterCount, letterLimit, label, wrapper = true }: InputContainerProps) => {
  return (
    <Label label={label} letterLimit={letterLimit} letterCount={letterCount} width={width}>
      <InputContainerBlock wrapper={wrapper} children={children} />
    </Label>
  );
};

export default InputContainer;
