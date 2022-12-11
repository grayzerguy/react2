import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>short circuit</h2>
      {/* <h3>{firstValue}</h3>
      <h3>value: {secondValue}</h3> */}
      <h1>{text || "guy g"}</h1>
      <button className="btn" onClick={() => setIsError(!false)}>
        Toggle Error
      </button>
      {!text && <h1>hello world</h1>}
      {/* {text && <h1>hello world</h1>} */}
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
