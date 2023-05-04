import styles from "./ErrorModal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles["error-modal-container"]}>
      <div className={styles.heading}>
        <h1>{props.head}</h1>
      </div>
      <div className={styles["main-content"]}>
        <p>{props.body}</p>
        <footer className={styles["button-container"]}>
          <button className={styles["okay-button"]} onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay
          head={props.head}
          body={props.body}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
      ;
    </Fragment>
  );
};

export default ErrorModal;
