import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import './index.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Resturent</h1>
     <button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
<div className="flex w-full flex-col border-opacity-50">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <div className="divider">OR</div>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>
    </>
  );
}

export default App;
