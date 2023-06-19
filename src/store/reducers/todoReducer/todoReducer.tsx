import {TodoActions, TodoActionTypes, TodoState} from "../../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    totalCount: 1
}

export const todoReducer = (state = initialState, action:TodoActions): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true, error:null};
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading:false, todos:action.payload};
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading:false, todos: [], error:action.payload};
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload};
        case TodoActionTypes.SET_TODO_COUNT:
            return {...state, totalCount: action.payload}
        default:
            return state
    }
}