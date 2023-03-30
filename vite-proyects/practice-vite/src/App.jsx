import React from "react";

function App() {

  const [count, setCount] = React.useState(0)

  const decrement = () => setCount(c => c - 1)
  const increment = () => setCount(c => c + 1)

  return (
    <>
      <h1>App</h1>

      <h3>Count: {count}</h3>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      
    </>
  );
}

export default App;
