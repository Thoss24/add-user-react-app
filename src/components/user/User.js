import React, { useState, Fragment, useRef } from "react";
import styles from "./User.module.css";
import ErrorModal from "../ui/ErrorModal";

const User = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitFormHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    event.preventDefault();

    const newUser = {
      username: enteredName,
      age: enteredAge,
    };

   nameInputRef.current.value = '';
   ageInputRef.current.value = '';

    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: 'Input Error',
        description: 'Username and age values cannot be empty'
      });
      return
    }

    if (+enteredAge < 0) {
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
          ref={nameInputRef}
        />
      </div>
      <div className={styles["input-shell"]}>
        <label>Age (Years)</label>
        <input
          type="text"
          name="age"
          id="age"
          ref={ageInputRef}
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
