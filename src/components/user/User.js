import styles from './User.module.css'

const User = (props) => {

    return (
        <div className={styles['add-user']}>
        <form className={styles.user}>
            <div className={styles['input-shell']}>
                <label>Username</label>
                <input type="text" name='username' id='username'/>
            </div>
            <div className={styles['input-shell']}>
                <label>Age (Years)</label>
                <input type="text" name='age' id='age'/>
            </div>
            <div className={styles['add-user-button-container']}>
                <button className={styles['add-user-button']} type='submit'>Add User</button>
            </div>
        </form>
        </div>
    )
}

export default User