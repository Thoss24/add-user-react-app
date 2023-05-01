import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
        <div className={styles.backdrop}/>
        <div className={styles["error-modal-container"]}>
        <div className={styles.heading}>
            <h1>Invalid Input</h1>
        </div>
        <div className={styles["main-content"]}>
            <p></p>
            <footer className={styles["button-container"]}>
            <button className={styles["okay-button"]}>Okay</button>
            </footer>
        </div>
        </div>
    </div>
  );
};

export default ErrorModal;
