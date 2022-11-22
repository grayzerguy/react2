import React from "react";


function UseStateObject(): JSX.Element {
//   const [person, setPerson] = React.useState({
//     name: "peter",
//     age: 24,
//     message: "random message",
//   });
  const [name, setName] = React.useState("peter");
  const [age, setAge] = React.useState(24);
  const [message, setMessage] = React.useState("random message");
  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage("hello world");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
}

export default UseStateObject;
