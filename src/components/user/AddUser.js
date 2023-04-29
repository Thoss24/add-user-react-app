import styles from './AddUser.module.css'
import User from './User'

const AddUser = () => {

    return (
        <div className={styles['add-user']}>
            <User />
        </div>
    )
}

export default AddUser