import React from "react";

import UseStateHook from "./UseStateHook";
import UseEffectHook from "./UseEffectHook";
import UseRefHook from "./UseRefHook";
import UseCallbackHook from "./UseCallbackHook";
import UseMemoHook from "./UseMemoHook";
import UseContextHook from "./UseContextHook";
import UseReducerHook from "./UseReducerHook";

const App = () => {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseCallbackHook />
      <UseMemoHook />
      <UseContextHook />
      <UseReducerHook />
    </>
  );
};

export default App;
