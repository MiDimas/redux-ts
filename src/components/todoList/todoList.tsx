import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useEffect} from "react";
import './todoList.css';

const TodoList = () => {
    const {todos, loading, error, page, limit, totalCount} = useTypedSelector(state => state.todo)
    const {fetchTodos, setPage} = useActions();
    useEffect(() => {
        fetchTodos(page, limit);
        console.log(totalCount)
    }, [page])
    if(loading){
        return <h1>LOADING...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    const pages = [...Array(totalCount)].map((_, i) => i + 1);
    return (
        <div>
            <div>
                {todos.map(value => (
                    <div key={value.id}>{value.id} - {value.title}</div>
                ))}
            </div>
            <div className='listButtons'>
                {pages.map(value => value === page
                    ? <div className='pageButtonActive' key={value}>{value}</div>
                    : <div onClick={() => setPage(value)} className='pageButton' key={value}>{value}</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;