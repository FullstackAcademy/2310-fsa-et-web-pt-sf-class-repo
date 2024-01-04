import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import ListItem from './components/ListItem';
import { notes } from './utils/dummyData';
function App() {
  const [todos, setTodos] = useState(notes);
  return (
    <div className='todo-container'>
      <h1>Todo List</h1>
      <AddTodo setTodos={setTodos} todos={todos} />
      <div>
        {todos.map((note) =>
          <ListItem
            note={note}
            todos={todos}
            setTodos={setTodos} />
        )}
      </div>
    </div>
  );
}

export default App;
