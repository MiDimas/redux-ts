import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useEffect} from "react";

const TodoList = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setPage} = useActions();

    useEffect(() => {
        fetchTodos();
    }, [])
    if(loading){
        return <h1>LOADING...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map(value => (
                <div key={value.id}>{value.id} - {value.title}</div>
            ))}
        </div>
    );
};

export default TodoList;