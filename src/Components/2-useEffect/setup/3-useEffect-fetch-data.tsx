import React, { useEffect, useState } from "react";

function UseEffectFetchData(): JSX.Element {
  const url = "https://api.github.com/users";

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  // console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>github users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UseEffectFetchData;
