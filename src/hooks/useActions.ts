import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionsCreator from "../store/actions-creators"

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionsCreator, dispatch)
}