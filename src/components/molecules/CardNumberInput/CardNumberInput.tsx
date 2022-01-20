import React from "react";
import styled from "styled-components";
import Label from "@atoms/Label/Label";
import Input from "@atoms/Input/Input";

const CardNumberInputBlock = styled.div``;

interface CardNumberInputProps {}

const CardNumberInput = ({}: CardNumberInputProps) => {
  return (
    <CardNumberInputBlock>
      <Label title={"asdf"}>
        <Input letterLimit={3} type={"number"} />
      </Label>
    </CardNumberInputBlock>
  );
};

export default CardNumberInput;
