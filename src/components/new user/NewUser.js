import User from "../user/User";

const NewUser = (props) => {
    const saveNewUserHandler = (user) => {
        const newUser = {
            ...user,
            id: Math.random().toString()
        };
        props.onAddUser(newUser)
    }

    return (
        <div>
            <User onSaveNewUser={saveNewUserHandler}/>
        </div>
    )

}

export default NewUser