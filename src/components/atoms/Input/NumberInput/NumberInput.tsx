import React from "react";
import InputContainer from "@molecules/InputContainer/InputContainer";
import Input from "@atoms/Input/Input";
import { useCardDispatch, useCardState } from "../../../contexts/CardContext";

interface NumberInputProps {}

const NumberInput = ({}: NumberInputProps) => {
  const { numbers } = useCardState();
  const dispatch = useCardDispatch();

  const selectIndex = (index: number) => {
    return (value: string | number) => {
      dispatch({ type: "CHANGE_NUMBERS", payload: { index, number: value } });
    };
  };

  return (
    <>
      <InputContainer width={350} label={"카드 번호"}>
        <Input letterLimit={4} type={"number"} value={numbers[0]} setValue={selectIndex(0)} />
        {numbers[0].length ? "-" : ""}
        <Input letterLimit={4} type={"number"} value={numbers[1]} setValue={selectIndex(1)} />
        {numbers[1].length ? "-" : ""}
        <Input letterLimit={4} type={"password"} value={numbers[2]} setValue={selectIndex(2)} />
        {numbers[2].length ? "-" : ""}
        <Input letterLimit={4} type={"password"} value={numbers[3]} setValue={selectIndex(3)} />
      </InputContainer>
    </>
  );
};

export default NumberInput;
