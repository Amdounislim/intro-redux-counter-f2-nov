import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { toggle } from "./JS/actions/actionShow";
import { addition } from "./JS/actions/actionAddition";

function App() {
  const dispatch = useDispatch();
  const sum = useSelector((state) => state.reducerAddition.sum);
  // const show = useSelector((state) => state.reducerShow.show);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  return (
    <div className="App">
      <h1>React Redux -- Workshop</h1>
      {/* <button className="visibility-btn" onClick={() => dispatch(toggle())}>
        {show ? "Hide Counter" : "Show Counter"}
      </button> */}
      {/* {show ? <Counter /> : ""} */}
      {/* {show && <Counter />} */}
      <input type="text" onChange={(e) => setVal1(e.target.value)} />
      <input type="text" onChange={(e) => setVal2(e.target.value)} />
      <button
        className="visibility-btn"
        onClick={() => dispatch(addition(Number(val1), Number(val2)))}
      >
        +
      </button>
      <h3>{`sum : ${sum}`}</h3>
    </div>
  );
}

export default App;
