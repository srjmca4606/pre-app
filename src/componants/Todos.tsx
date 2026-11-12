import {type FC } from "react";
import type { Todo } from "./Types";
import TodoItem from "./TodoItem";

type TodosProps = {
    todoArray: Todo[],
    addTodoItem: (newTodo: Todo) => void,
    deleteTodoItem: (todoId: number) => void
}

const Todos: FC<TodosProps> = ({ todoArray, addTodoItem, deleteTodoItem }) => {    
    
    return (
        <>
            <h1>Todos lists: {todoArray.length}</h1>
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
                    todoArray.map((todo) => {
                        return <TodoItem key={todo.id} Item={todo} deleteTodoItem={deleteTodoItem} />;
                    })
                }                
            </ul>
        </>
        )
}

export default Todos