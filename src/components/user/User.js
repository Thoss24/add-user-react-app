import React, { useState, Fragment } from "react";
import styles from "./User.module.css";
import ErrorModal from "../ui/ErrorModal";

const User = (props) => {
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [error, setError] = useState();

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

    if (currentAge.trim().length === 0 || currentUsername.trim().length === 0) {
      setError({
        title: 'Input Error',
        description: 'Username and age values cannot be empty'
      });
      return
    }

    if (+currentAge < 0) {
      setError({
        title: 'Input Error',
        description: 'Cannot enter negative numbers for age. Age must be greater than 0.'
      });
      return
    }

    props.onSaveNewUser(newUser);
  };

  const errorHandler = () => {
    setError(null)
  };

  return (
    <Fragment>
    <div className={styles["add-user"]}>
    {error && <ErrorModal head={error.title} body={error.description} onConfirm={errorHandler}/> }
    <form className={styles.user} onSubmit={submitFormHandler}>
      <div className={styles["input-shell"]}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={usernameHandler}
          value={currentUsername}
        />
      </div>
      <div className={styles["input-shell"]}>
        <label>Age (Years)</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={ageHandler}
          value={currentAge}
        />
      </div>
      <div className={styles["add-user-button-container"]}>
        <button className={styles["add-user-button"]} type="submit">
          Add User
        </button>
      </div>
    </form>
  </div>
  </Fragment>
  )
};

export default User;
