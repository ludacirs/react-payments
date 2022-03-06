import React from "react";
import styled from "styled-components";
import Header from "@molecules/Header/Header";
import Card from "@atoms/Card/Card";
import NumberInput from "./NumberInput/NumberInput";
import DateInput from "./DateInput/DateInput";
import OwnerInput from "./OwnerInput/OwnerInput";
import PasswordInput from "./PasswordInput/PasswordInput";
import SecurityCodeInput from "./SecurityCodeInput/SecurityCodeInput";
import { flexBox } from "@styles/mixin";
import { useCardState } from "../../contexts/CardContext";

const CardFormBlock = styled.form`
  ${flexBox("center", "flex-start", "column")};
  width: 400px;
  height: auto;
  padding: 12px;
  border: 1px solid black;
  > * {
    margin: 5px 0;
  }
`;

interface CardFormProps {}

const CardForm = ({}: CardFormProps) => {
  const { brand, name, month, year, numbers } = useCardState();

  return (
    <CardFormBlock>
      <Header title={"카드 추가"} backButton={true} />
      <Card name={name} brand={brand} month={month} year={year} numbers={numbers} />
      <NumberInput />
      <DateInput />
      <OwnerInput />
      <PasswordInput />
      <SecurityCodeInput />
    </CardFormBlock>
  );
};

export default CardForm;
