import React from 'react';
import './App.css';
import UserList from "./components/userList/userList";
import TodoList from "./components/todoList/todoList";
import {setupStore} from "./store-toolkit/store";
import {Provider} from "react-redux";
import UsersTool from "./components-toolkit/UsersTool";
import PostsList from "./components/postsList/PostsList";

const storeTool  = setupStore();

function App() {
    return (
        <div className="App">
            <UserList />
            <hr/>
            <TodoList />
            <Provider store={storeTool}>
                <UsersTool />
                <PostsList />
            </Provider>
        </div>
    );
}

export default App;
