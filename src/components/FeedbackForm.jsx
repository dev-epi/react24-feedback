import React, { useContext, useEffect, useState } from 'react'
import RatingSelect from './RatingSelect'
import { FeedbackContext } from '../contexts/FeedbackContext'

export default function FeedbackForm() {
    const {createFeedback , editedFeedback , updateFeedback} = useContext(FeedbackContext)
    const [text , setText]=useState('')
    const [rating , setRating] = useState(7)
    const [message , setMessage] = useState('')
    const [sendDisabled , setSendDisabled] = useState(true)
    const addFeedback = (event)=>{
        //eliminer l'action par defaut du boutton : refresh
        event.preventDefault()

        if(editedFeedback){
            updateFeedback({text , rating} , editedFeedback._id)
        }else{
            createFeedback({text , rating})
        }
       
        //reset form
        setSendDisabled(true)
        setText('')
        setRating(10)
    }
    const textChange = (event)=>{
        setText(event.target.value)
        if(text.length <10){
            setMessage('At least 10 caracteres')
            setSendDisabled(true)
        }else{
            setMessage('')
            setSendDisabled(false)
        }
    }

    useEffect(()=>{

        if(editedFeedback){
            setText(editedFeedback.text)
            setRating(editedFeedback.rating)
        }
    } , [editedFeedback])

    

  return (
    <div className='card'>
        <form onSubmit={addFeedback}>
            <RatingSelect rating={rating} select={(nb)=>setRating(nb)} />
        <div className='input-group'>
            <input type="text" onChange={textChange} value={text} />
            <button type='submit' className='btn btn-secondary' disabled={sendDisabled}>Send</button>
        </div>
        {message}
        </form>
    </div>
  )
}
