import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={styles["user-shell"]}>
      <p>{props.name}</p>
      <p>{props.years}</p>
    </li>
  );
};

export default UserItem;
