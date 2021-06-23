import React from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({todo, onDelete}) => {
    return (
        <div className="todo_item item_1">
            <h4>{todo.name}</h4>
            <h4>{todo.price}</h4>
            <a onClick={()=>{onDelete(todo)}}><FontAwesomeIcon color="red" icon={faTrash} /></a>
        </div>
    )
}
export default Todo;
