import { createContext } from "react";
import type { Todo } from "./componants/Types";

interface IAppContext {
    todos: Todo[];
    addTodoItem: (todoItem: Todo) => void;
    deleteTodoItem: (todoId: number) => void;
}

export const AppContext = createContext<IAppContext>({
    todos: [],
    addTodoItem: () => {},
    deleteTodoItem: () => {}
});
