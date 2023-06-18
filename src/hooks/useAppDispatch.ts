import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {RootState} from "../store/reducers";


export const useAppDispatch: () => ThunkDispatch<RootState, void, AnyAction> = useDispatch;