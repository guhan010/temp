// import React from 'react'
import { useState } from "react";

const State = () => {
  let [count, setCount] = useState(10);

  function increase() {
    count = count + 1;
    setCount(count);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increase()}>Increase</button>
    </div>
  );
};

export default State;
