import React from "react";
import InputContainer from "@molecules/InputContainer/InputContainer";
import { Input } from "@components/atoms/";
import { useCardDispatch, useCardState } from "@contexts/CardContext";

interface DateInputProps {}

const DateInput = ({}: DateInputProps) => {
  const { month, year } = useCardState();
  const dispatch = useCardDispatch();

  const setMonthValue: setValue = (month) => {
    dispatch({ type: "CHANGE_MONTH", payload: { month } });
  };
  const setYearValue: setValue = (year) => {
    dispatch({ type: "CHANGE_YEAR", payload: { year } });
  };

  return (
    <>
      <InputContainer width={150} label={"만료일"}>
        <Input letterLimit={2} type={"text"} placeHolder={"MM"} value={month} setValue={setMonthValue} />
        <div>/</div>
        <Input letterLimit={2} type={"text"} placeHolder={"YY"} value={year} setValue={setYearValue} />
      </InputContainer>
    </>
  );
};

export default DateInput;
