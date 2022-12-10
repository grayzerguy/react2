import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const useEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        // console.log("useEffect");
        window.addEventListener("resize", checkSize);
        return () => {
            console.log("cleanup");
            window.removeEventListener("resize", checkSize);
        };
    }, []);


  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default useEffectCleanup;
