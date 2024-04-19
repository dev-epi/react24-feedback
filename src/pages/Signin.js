import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const [user , setUser]= useState({email : '' , password : ''})
    const navigate = useNavigate()
    const login = (event)=>{
        event.preventDefault();
        console.log(user)
        localStorage.setItem('user' , user)
        //after signin api with success response
        navigate('/feedbacks')
    }
    return (
        <div>
            <Header text="Signin"></Header>
            <div className='container'>
                <div className='card'>
                    <form onSubmit={login}>
                        <label>Email</label>
                        <div className='input-group'>
                            <input type='email' required onChange={(e)=> setUser({...user , email : e.target.value})} />
                        </div>
                        <label>Password</label>
                        <div className='input-group'>
                            <input type='password' required onChange={(e)=> setUser({...user ,password : e.target.value})} />
                        </div>
                      <button type='submit' className='btn btn-secondary'> Signin</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
