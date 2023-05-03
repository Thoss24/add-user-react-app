import NewUser from "./components/new user/NewUser";
import UsersDisplay from "./components/ui/UsersDisplay";
import React, { useState, Fragment } from "react";
import "./App.css";

const CurrentUsers = [
  {
    id: 1,
    username: "James",
    age: 25,
  },
  {
    id: 2,
    username: "Ellen",
    age: 32,
  },
];

function App() {
  const [users, setUsers] = useState(CurrentUsers);

  const addUserHandler = (user) => {
    console.log(user)
    setUsers([user, ...users])
    console.log(users)
  }

  return (
    <Fragment>
      <NewUser onAddUser={addUserHandler}/>
      <UsersDisplay items={users} />
    </Fragment>
  );
}

export default App;
