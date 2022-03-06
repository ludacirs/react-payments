import React, { createContext, useContext, useReducer } from "react";

interface CardState {
  name: string;
  brand: string;
  month: string;
  year: string;
  numbers: string[];
}

export interface CardAction {
  type: "CHANGE_NUMBERS" | "CHANGE_MONTH" | "CHANGE_YEAR" | "CHANGE_NAME" | "CHANGE_PASSWORD";
  payload: any;
}

const initialState: CardState = {
  name: "",
  brand: "",
  month: "",
  year: "",
  numbers: ["", "", "", ""],
};

const reducer = (state: CardState, { type, payload }: CardAction) => {
  switch (type) {
    case "CHANGE_NUMBERS": {
      const { index, number } = payload;
      const nextNumbers = [...state.numbers];
      nextNumbers[index] = number;
      return { ...state, numbers: nextNumbers };
    }
    case "CHANGE_MONTH": {
      const { month } = payload;
      return { ...state, month };
    }
    case "CHANGE_YEAR": {
      const { year } = payload;
      return { ...state, year };
    }
    case "CHANGE_NAME": {
      const { name } = payload;
      return { ...state, name };
    }
    default: {
      return state;
    }
  }
};

const CardStateContext = createContext<CardState | null>(null);
const CardDispatchContext = createContext<React.Dispatch<CardAction> | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardDispatchContext.Provider value={dispatch}>
      <CardStateContext.Provider value={state}>{children}</CardStateContext.Provider>
    </CardDispatchContext.Provider>
  );
};

export const useCardState = () => {
  const state = useContext(CardStateContext);
  if (!state) {
    throw new Error("card state context error");
  }
  return state;
};

export const useCardDispatch = () => {
  const dispatch = useContext(CardDispatchContext);
  if (!dispatch) {
    throw new Error("card dispatch context error");
  }
  return dispatch;
};
