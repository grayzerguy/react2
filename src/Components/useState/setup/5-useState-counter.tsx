import React, { useState } from "react";
function UseStateObject(): JSX.Element {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const increase = () => {
    setValue(value + 1);
  };
  const increaseLetter = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={increase}>
          Increase
        </button>
      </section>
      {/* //----------------------------------------------------- */}
      <section style={{ margin: "4rem 0" }}>
        <h2>Mor Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increaseLetter}>
          Increase Later
        </button>
      </section>
    </>
  );
}
export default UseStateObject;
