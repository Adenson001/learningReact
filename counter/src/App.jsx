import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const Add = () => {
    setCounter(counter + 1);
  };

  const subtract = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React Counter {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={Add}>Add Value</button>{" "}
      <button onClick={subtract}>Remove Value</button>
    </>
  );
}

export default App;
