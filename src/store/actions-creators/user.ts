import {UserActionTypes, UsersAction, UserState} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";
import {ThunkDispatch} from "redux-thunk";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }
        catch (e){
            const error = e as Error;
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: error.message})
        }
    }
}