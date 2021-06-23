import React, { useState } from 'react'
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer';
import AddTodo from './AddTodo';

function Todo_App() {
    const onDelete = (todo) => {
        settodo(todos.filter((e) => {
            return e!=todo;
        }))
    }

    const addTodo = (title, price) => {
        let sno = todos[todos.length-1].id +1 ;
        const mytodo = {
            id : sno,
            name : title,
            price : `$${price}`
        }
        settodo([...todos, mytodo]);
        console.log(mytodo);
    }

    const [todos, settodo] = useState([
        {
            id:1,
            name: "Computer",
            price: "$50"
        },
        {
            id:2,
            name: "Keybord",
            price: "$30"
        },
        {
            id:3,
            name: "Mouse",
            price: "$20"
        }
    ])
    return (
        <>
            <Header/>
            <Todos todos={todos} onDelete={onDelete} />
            <AddTodo  addTodo={addTodo} />
            <Footer/>
        </>
    );
}

export default Todo_App;
