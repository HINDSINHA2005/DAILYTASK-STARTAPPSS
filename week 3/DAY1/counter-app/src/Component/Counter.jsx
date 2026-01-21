import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  function Increasecount() {
    
setcount(count+1);
    
    
  }
  function Decreasecount() {
    setcount(count-1);
  }

  return (
    <div className="counter">
      <h1>Value of Count:{count}</h1>
      <button onClick={Increasecount}>Increase Count</button>
      <button onClick={Decreasecount}>Decrease Count</button>
    </div>
  );
};

export default Counter;
