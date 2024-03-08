import React from 'react'
import { FaTimes } from "react-icons/fa";

export default function FeedbackItem({feedback , deleteFeedbackClick}) {

  return (
    <div className='card'>
            <button className='close' onClick={()=>deleteFeedbackClick(feedback._id)}>
                <FaTimes color="purple" />
            </button>
            <div className='num-display'>
                {feedback.rating}
                </div>
            <div className='text-display'>
                {feedback.text}</div>
        </div>
  )
}
