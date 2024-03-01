import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList ({items = []}) {
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
