import React from "react";
import { data } from "../../../../src/data";

function UseStateArray(): JSX.Element {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id: number) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
                        <button
               className="btn"
               onClick={() => {
                 if (people.length > 0) {
                   removeItem(id);
                 }
               }}
             >
               Remove Item
             </button>
          </div>
        );
      })}
    
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
      <button
        className="btn"
        onClick={() => {
          setPeople(data);
        }}
      >
        Reset Items
      </button>
 
    </>
  );
}

export default UseStateArray;
