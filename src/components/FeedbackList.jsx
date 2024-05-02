import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { FeedbackContext } from '../contexts/FeedbackContext'

export default function FeedbackList () {

  var {items} = useContext(FeedbackContext)
  return (
    <div className='feedback-list'>

        {/* FeedbackItem */}
        {
            items.map((feedback , index)=>
                <FeedbackItem key={index} 
                feedback={feedback} />
            )
        }
        
    </div>
  )
}
