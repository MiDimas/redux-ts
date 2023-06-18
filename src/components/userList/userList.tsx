import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useEffect} from "react";
import {fetchUsers} from "../../store/actions-creators/user";
import {ThunkDispatch} from "redux-thunk";
import {UserActionTypes} from "../../types/users";


const UserList = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() =>{
            dispatch(fetchUsers());
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