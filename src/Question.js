import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showinfo, toggleinfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => toggleinfo(!showinfo)}>
          {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showinfo && info}
    </article>
  );
};

export default Question;
