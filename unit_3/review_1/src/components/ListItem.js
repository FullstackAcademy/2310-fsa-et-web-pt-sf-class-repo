import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ListItem({ note, setTodos, todos }) {
    const [isCompleted, setIsCompleted] = useState(false);
    function handleDelete() {
        const updatedTodos = todos.filter((todo) => todo !== note);
        setTodos(updatedTodos);
    }
    return (
        <div className='listItem-container'>
            <p className={isCompleted ? 'completed' : 'note'}>{note}</p>
            <div>
                <Button onClick={() => setIsCompleted(true)}>Complete</Button>
                <Button onClick={() => handleDelete()} variant="danger">Delete</Button>
            </div>
        </div>
    )
}

export default ListItem;
