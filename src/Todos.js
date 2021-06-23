import React from 'react';
import Todo from './Todo';
import './Style.css'

const Todos = (props) => {
    return (
        <div className="todos-container">
            <h3>Todo-List</h3>
            <div className="todo_item head">
                <h4>Name</h4>
                <h4>Price</h4>
               <h4>Delete</h4>
            </div>
            { props.todos.length === 0? "No Todos to Display" : 
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}
export default Todos;
