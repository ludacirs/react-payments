import React from "react";
import InputContainer from "@molecules/InputContainer/InputContainer";
import Input, { setValue } from "@atoms/Input/Input";
import { useCardDispatch, useCardState } from "../../../contexts/CardContext";

interface OwnerInputProps {}

const OwnerInput = ({}: OwnerInputProps) => {
  const { name } = useCardState();
  const dispatch = useCardDispatch();

  const setValue: setValue = (value) => {
    dispatch({ type: "CHANGE_NAME", payload: { name: value } });
  };

  return (
    <>
      <InputContainer width={350} label={"카드 소유자 이름(선택)"} letterLimit={30} letterCount={name.length}>
        <Input letterLimit={30} type={"text"} value={name} setValue={setValue} />
      </InputContainer>
    </>
  );
};

export default OwnerInput;
