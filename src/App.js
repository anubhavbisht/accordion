import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [ques, setques] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <section className="info">
          {ques.map((q) => {
            return <SingleQuestion key={q.id} {...q}></SingleQuestion>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
