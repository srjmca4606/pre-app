import type { FC } from 'react';
import  { type Todo } from './Types'

type TodoItemProps = {
    Item: Todo,
    deleteTodoItem: (todoId: number) => void
}

const TodoItem: FC<TodoItemProps> = ({ Item, deleteTodoItem }) =>
{
    return (
        <ul key={Item.id} onClick={() => deleteTodoItem(Item.id)}>
                {Item.title}            
        </ul>
    )
}
export default TodoItem;