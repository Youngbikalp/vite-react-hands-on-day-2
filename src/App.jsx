import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getMessage = () => {
    return count % 2 === 0 ? "Even Count" : "Odd Count";
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is my first React/Vite web application</h1>
      <h3>It also checks if the count is even or odd</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase Count
        </button>
        <p>Count is {count}</p>
        <p>{getMessage()}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
