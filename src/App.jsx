import { useState } from "react";

import "./App.css";
import Spreadsheet from "./Spreadsheet";
import Toolbar from "./components/Toolbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Toolbar />
        <Spreadsheet />
      </div>
    </>
  );
}

export default App;
