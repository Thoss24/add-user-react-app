import React, { useState } from "react";
import styles from "./User.module.css";

const User = (props) => {
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentAge, setCurrentAge] = useState("");

  const usernameHandler = (event) => {
    setCurrentUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setCurrentAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const newUser = {
      username: currentUsername,
      age: currentAge,
    };

    setCurrentUsername("");
    setCurrentAge("");

    props.onSaveNewUser(newUser);
  };

  return (
    <div className={styles["add-user"]}>
      <form className={styles.user} onSubmit={submitFormHandler}>
        <div className={styles["input-shell"]}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={usernameHandler}
          />
        </div>
        <div className={styles["input-shell"]}>
          <label>Age (Years)</label>
          <input type="text" name="age" id="age" onChange={ageHandler} />
        </div>
        <div className={styles["add-user-button-container"]}>
          <button
            className={styles["add-user-button"]}
            type="submit"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
