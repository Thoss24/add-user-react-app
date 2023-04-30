import styles from "./UsersDisplay.module.css";
import UserItem from "../user/UserItem";

const UsersDisplay = (props) => {
  return (
    <ul className={styles["users-display-container"]}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          name={user.username}
          years={`(${user.age} years old)`}
        />
      ))}
    </ul>
  );
};       

export default UsersDisplay;
