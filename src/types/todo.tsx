export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
    SET_TODO_COUNT = "SET_TODO_COUNT"
}

export type TodoObject = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO;
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: TodoObject[];
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}
interface SetTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}
interface SetTodoCountAction {
    type: TodoActionTypes.SET_TODO_COUNT;
    payload: number;
}

export type TodoActions = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPageAction | SetTodoCountAction;

export interface TodoState {
    todos: TodoObject[] | [];
    loading: boolean;
    error: null|string;
    page: number;
    limit: number;
    totalCount: number;
}
