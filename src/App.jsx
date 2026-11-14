import { useState } from "react";

import "./App.css";
import Spreadsheet from "./Spreadsheet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Spreadsheet />
      </div>
    </>
  );
}

export default App;
