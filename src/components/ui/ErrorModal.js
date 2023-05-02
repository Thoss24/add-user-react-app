import styles from "./ErrorModal.module.css";
import React, { useState } from "react";

const ErrorModal = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.backdrop} />
      <div className={styles["error-modal-container"]}>
        <div className={styles.heading}>
          <h1>{props.head}</h1>
        </div>
        <div className={styles["main-content"]}>
          <p>{props.body}</p>
          <footer className={styles["button-container"]}>
            <button className={styles["okay-button"]} onClick={props.onConfirm}>Okay</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
