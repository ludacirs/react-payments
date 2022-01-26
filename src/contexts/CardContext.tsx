import React, { createContext, useContext, useReducer } from "react";

interface CardState {
  name: string;
  brand: string;
  month: string;
  year: string;
  numbers: string[];
}

export interface CardAction {
  type: string;
  payload: any;
}

const initialState: CardState = {
  name: "",
  brand: "",
  month: "",
  year: "",
  numbers: [],
};

const reducer = (state: CardState, { type, payload }: CardAction) => {
  switch (type) {
    case "": {
      return { ...state };
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
    throw new Error("scroll state context error");
  }
  return state;
};

export const useCardDispatch = () => {
  const dispatch = useContext(CardDispatchContext);
  if (!dispatch) {
    throw new Error("scroll dispatch context error");
  }
  return dispatch;
};
