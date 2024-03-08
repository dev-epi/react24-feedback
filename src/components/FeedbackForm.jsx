import React, { useState } from 'react'
import RatingSelect from './RatingSelect'

export default function FeedbackForm({createFeedback}) {
    const [text , setText]=useState('')
    const [rating , setRating] = useState(7)
    const [message , setMessage] = useState('')
    const [sendDisabled , setSendDisabled] = useState(true)
    const addFeedback = (event)=>{
        //eliminer l'action par defaut du boutton : refresh
        event.preventDefault()

        createFeedback({text , rating})
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
