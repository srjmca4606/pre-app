import { useEffect, useState } from 'react';
import './App.css'
import type { Todo } from './componants/Types';
import Todos from './componants/Todos';
import useWindowsResize from './hooks/useWindowsResize';
import useFetch from './hooks/useFetch';
import { AppContext } from './AppContext';

function App() { 

  //Custom hook to get the current window size and update it on window resize event
  const size = useWindowsResize();
  const { data, loading } = useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos');

  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoItem = (newTodo: Todo) => {
    setTodos([newTodo, ...todos]);
  }

  const deleteTodoItem = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }
 
  //As aoon as data changes, update the todos state with the new data
    useEffect(() => {
        console.log("Todos component mounted");
         setTodos(data ?  data : []);             
    }, [data]);
 
  if (loading) {
    return <h1>Loading...</h1>    
  }

  return (
    
      <section id="center">
        
        <div>
          <h1>Hello React</h1>         
          {/* {
            size.width < 400 ? 
            <p>Window width is less than 400px</p> : 
            <Todos todoArray={todos} addTodoItem={addTodoItem} deleteTodoItem={deleteTodoItem}  />
          } */}

          <AppContext.Provider value={{
              todos,
              addTodoItem,
              deleteTodoItem
            }}>

              {
                size.width < 400 ? 
                <p>Window width is less than 400px</p> : 
                <Todos />
              }
          </AppContext.Provider>

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
