import React, { FormEvent, useState } from "react";
import styled from "styled-components";

const InputBlock = styled.input<Pick<InputProps, "backgroundColor">>`
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : `#ecebf1`)};
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  font-size: 18px;
`;

interface InputProps {
  type: "number" | "text" | "password";
  letterLimit: number;
  placeHolder?: string;
  initValue?: string;
  backgroundColor?: string;
  readOnly?: boolean;
}

const Input = ({ type, letterLimit, placeHolder, initValue = "", backgroundColor, readOnly = false }: InputProps) => {
  const [value, setValue] = useState(initValue);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const targetElement = e.target as HTMLInputElement;
    const nextValue = targetElement.value;

    if (nextValue.length === letterLimit) {
      const form = targetElement.form as HTMLFormElement;
      const nextInput = form.elements[[...form].indexOf(targetElement) + 1] as HTMLInputElement;
      nextInput.focus();
    }
    if (type === "password" && isChar(nextValue)) {
      return;
    }

    if (nextValue.length > letterLimit) {
      return;
    }

    setValue(nextValue);
  };

  return (
    <InputBlock
      readOnly={readOnly}
      backgroundColor={backgroundColor}
      type={type}
      placeholder={placeHolder}
      maxLength={letterLimit}
      onInput={handleInput}
      value={value}
    />
  );
};

export default Input;

const isChar = (value: string) => value.charCodeAt(value.length - 1) < 47 || value.charCodeAt(value.length - 1) > 58;
