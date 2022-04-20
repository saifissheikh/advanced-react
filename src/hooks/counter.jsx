import React, { useState } from "react";

const Counter = () => {
  const [count, setState] = useState(0);
  return (
    <React.Fragment>
      <div>Counter: {count}</div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </React.Fragment>
  );
};

export default Counter;
