import axios from "axios";
import {IUser} from "../../types-toolkit/IUser";
import {AppDispatch} from "../store";
import usersTool from "../../components-toolkit/UsersTool";
import {userSlice} from "../reducers/userSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Произошла ошибка при загрузке пользователей")
        }
    }
);