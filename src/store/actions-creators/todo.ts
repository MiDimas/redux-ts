import {Dispatch} from "redux";
import axios from "axios";
import {TodoActions, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _limit: limit, _page: page}
            });
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
            dispatch({type:TodoActionTypes.SET_TODO_COUNT, payload: Math.ceil(response.headers["x-total-count"] / limit)})
        }
        catch (e){
            const error = e as Error;
            dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: error.message})
        }
    }
};

export const setPage = (page: number): TodoActions => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
};