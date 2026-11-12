import { useContext, type FC } from 'react';
import  { type Todo } from './Types'
import { AppContext } from '../AppContext';

type TodoItemProps = {
    Item: Todo
}

const TodoItem: FC<TodoItemProps> = ( { Item }) => {

    const {deleteTodoItem} = useContext(AppContext)
 
    return (
        <ul key={Item.id} onClick={() => deleteTodoItem(Item.id)}>
                {Item.title}            
        </ul>
    )
}
export default TodoItem;