import { useEffect, useState } from 'react';
import './App.css'
import type { Todo } from './componants/Types';
import Todos from './componants/Todos';

function App() { 

  const [todos, setTodos] = useState<Todo[]>([]);
  
      const addTodoItem = (newTodo: Todo) => {
        setTodos([newTodo, ...todos]);
      }
  
      const deleteTodoItem = (todoId: number) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
      }

      const getTodos = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const jsonResp = await response.json();
          setTodos(jsonResp);
      }
  
      useEffect(() => {
        console.log("Todos component mounted");
        getTodos();             
    }, []);

  return (
    
      <section id="center">
        
        <div>
          <h1>Hello React</h1>
          <Todos todoArray={todos} addTodoItem={addTodoItem} deleteTodoItem={deleteTodoItem}  />
          
          {/*<LoginForm />

          <WelcomeMessage isLoggedIn={true} />
          <Button text="Click Me!!"></Button>
          <Counter /> 
          {showCounter && <AutoCounter />} 
          <button  onClick={() => setShowCounter(!showCounter)}>Toggle Counter</button> 

        <PostsPage /> */}
        </div>
        
      </section>
   
  )
}

export default App
