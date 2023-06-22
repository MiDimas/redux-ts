import axios from "axios";
import {IUser} from "../../types-toolkit/IUser";
import {AppDispatch} from "../store";
import usersTool from "../../components-toolkit/UsersTool";
import {userSlice} from "../reducers/userSlice";


export const fetchUsers = async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));

    }
    catch (e) {
        dispatch(userSlice.actions.usersFetchingError('Произошла ошибка при запросе пользователей с сервера'));
    }
}