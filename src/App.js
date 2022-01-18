import { useState } from "react";
import Demo from "./Demo";

export default function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Demo num={num} setNum={setNum} />
    </div>
  );
}
