import React from 'react';
import './App.css';
import UserList from "./components/userList/userList";
import TodoList from "./components/todoList/todoList";

function App() {
    return (
        <div className="App">
            <UserList />
            <hr/>
            <TodoList />
        </div>
    );
}

export default App;
