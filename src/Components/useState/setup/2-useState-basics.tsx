import React, { useState } from "react";


function UseStateBasics(): JSX.Element {
  const [text, setText] = useState<string>("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    }
    else {
      setText("random title");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
}

export default UseStateBasics;
