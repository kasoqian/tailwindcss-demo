import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="underline text-3xl text-cyan-800 ">hello world</h1>
    </div>
  );
}

export default App;
