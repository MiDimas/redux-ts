import {userSlice} from "../store-toolkit/reducers/userSlice";
import {useAppDispatch} from "../hooks-toolkit/useAppDispatch";
import {useAppSelector} from "../hooks-toolkit/useAppSelector";

const CounterTool = () => {
    const {count} = useAppSelector( state => state.user);
    const{increment} = userSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {dispatch(increment(5))}}>Увеличить число</button>
            
        </div>
    );
};

export default CounterTool;