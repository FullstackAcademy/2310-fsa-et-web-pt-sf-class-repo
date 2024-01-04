import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function AddTodo({ setTodos, todos }) {
    const [todo, setTodo] = useState('');
    function handleAddTodo() {
        const updatedTodos = [...todos];
        updatedTodos.push(todo);
        setTodos(updatedTodos);
        setTodo('');
    }
    return (
        <div className='addTodo-container'>
            <p>Add Todo</p>
            <input onChange={(e) => setTodo(e.target.value)} type='text' placeholder='Add a new todo' value={todo} />
            <Button onClick={() => handleAddTodo()} variant="primary">Submit</Button>
        </div>
    )
}

export default AddTodo;
