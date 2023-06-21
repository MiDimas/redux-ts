import {AppDispatch} from "../store-toolkit/store";
import {useDispatch} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();