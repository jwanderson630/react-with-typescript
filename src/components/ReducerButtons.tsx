import React, { useReducer, useRef } from "react";
import useClickOutside from "./useClickOutside";

type Action = {
  type: "one" | "two";
};

type State = {
  rValue: boolean;
};

const initialState = {
  rValue: true,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "one":
      return { rValue: true };
    case "two":
      return { rValue: false };
    default:
      return state;
  }
};

export const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null!);
  useClickOutside(ref, e => {
    console.log("hi");
  });
  return (
    <div ref={ref}>
      {state?.rValue ? <h1>True</h1> : <h1>False</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action one</button>
      <button onClick={() => dispatch({ type: "two" })}>Action two</button>
    </div>
  );
};
