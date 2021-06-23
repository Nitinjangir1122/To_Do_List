import React from 'react'
import './Style.css';

const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h3>Todo-List</h3>
                </div>
                <div className="nav-links">
                    <a href="/" >Home</a>
                    <a href="/pricing" >Pricing</a>
                    <a href="/team" >Our Team</a>
                    <a href="/about" >About</a>
                </div>
            </div>
        </>
    )
}

export default Header;
