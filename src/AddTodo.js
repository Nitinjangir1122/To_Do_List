import React, { useState } from 'react';
import './Style.css';

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !price){
            alert("Title or Price can't be Empty");
        }else{
            addTodo(title, price);
        }
    }

    return (
        <>
            <form className="input_field">
                <h3>Add Items to Todo-List :-</h3>
                <label htmlFor="#"> Name</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                <label htmlFor="#">Price</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} />
                <a className="btn Add_btn" onClick={submit}>Add to List </a>
            </form>
        </>
    )
}

export default AddTodo;
