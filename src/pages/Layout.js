import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
    const navigate = useNavigate()
    const logout = ()=>{
        //remove all items from cache
        localStorage.clear();

        //redirection 
        navigate('/signin')
    }
    return (
        <div className='container'>

            <Header></Header>

            <Outlet/>

            <div className='card'>
                <NavLink to="/signin" activeclassname="active"> SignIn</NavLink>
                <NavLink to="/feedbacks" activeclassname="active"> Feedback App</NavLink>
                <Link to="/about">About us</Link>
                <NavLink to="/profile">Profile</NavLink>
                <button className='btn btn-primary' onClick={logout}>Logout</button>
            </div>
            <input></input>
        </div>
    )
}
