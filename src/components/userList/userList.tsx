import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";
import {fetchUsers} from "../../store/actions-creators/user";
import {useActions} from "../../hooks/useActions";

const UserList = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

    useEffect(() =>{
            fetchUsers();
        }
    , []);

    if (loading) {
        return <h1>LOADING...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;