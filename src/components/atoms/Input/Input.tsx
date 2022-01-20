import React, { FormEvent, useState } from "react";
import styled from "styled-components";

const InputBlock = styled.input`
  background-color: #ecebf1;
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
}

const Input = ({ type, letterLimit, placeHolder }: InputProps) => {
  const [value, setValue] = useState("");

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const nextValue = e.currentTarget.value;

    if (type === "password" && isChar(nextValue)) {
      return;
    }

    if (nextValue.length > letterLimit) {
      return;
    }

    setValue(nextValue);
  };

  return (
    <InputBlock type={type} placeholder={placeHolder} maxLength={letterLimit} onInput={handleInput} value={value} />
  );
};

export default Input;

const isChar = (value: string) => value.charCodeAt(value.length - 1) < 47 || value.charCodeAt(value.length - 1) > 58;
