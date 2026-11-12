import {useContext } from "react";
import type { Todo } from "./Types";
import TodoItem from "./TodoItem";
import { AppContext } from "../AppContext";

const Todos = () => {    
    
    const {todos, addTodoItem} = useContext(AppContext)
    
    return (
        <>
            <h1>Todos lists: {todos.length}</h1>
            <button onClick={() => {
                const newTodo: Todo = {
                    userId: new Date().getTime(),
                    id: new Date().getTime(),
                    title: `Todo ${new Date().getTime()}`,
                    completed: false
                };
                addTodoItem(newTodo);
            }}>
                Add Todo
            </button>    
            <ul>
                {
                    todos.map((todo) => {
                        return <TodoItem key={todo.id} Item={todo} />;
                    })
                }                
            </ul>
        </>
        )
}

export default Todos