import {useAppSelector} from "../hooks-toolkit/useAppSelector";
import {useAppDispatch} from "../hooks-toolkit/useAppDispatch";
import {useEffect} from "react";
import {fetchUsers} from "../store-toolkit/actions-creators/fetchUsers";

const UsersTool = () => {
    const dispatch = useAppDispatch();
    const {users, error, isLoading} = useAppSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <div>{isLoading && <h1>Загружаем пользователей...</h1>}</div>
            <div>{error && <h1>{error}</h1>}</div>
            <div>{users && users.map((value) => (<div key={value.id}>{value.name}</div>))}</div>
        </div>
    );
};

export default UsersTool;