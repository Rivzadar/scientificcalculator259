import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [exp, setExp] = useState("");

  const add = (v) => setExp(exp + v);
  const clear = () => setExp("");

  const calc = () => {
    try {
      setExp(evaluate(exp).toString());
    } catch {
      setExp("Error");
    }
  };

  const btns = [
    "7","8","9","/","sin(",
    "4","5","6","*","cos(",
    "1","2","3","-","tan(",
    "0",".","+","log(","sqrt(",
    "(",")","^","C","="
  ];

  return (
    <div className="calculator">
      <h2>Scientific Calculator</h2>
      <input className="display" value={exp} readOnly />

      <div className="buttons">
        {btns.map((b,i)=>(
          <button key={i} onClick={()=>{
            if(b==="=") calc();
            else if(b==="C") clear();
            else add(b);
          }}>{b}</button>
        ))}
      </div>
    </div>
  );
}

export default App;