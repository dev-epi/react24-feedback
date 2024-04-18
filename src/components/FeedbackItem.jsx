import React from 'react'
import { FaTimes , FaEdit } from "react-icons/fa";

export default function FeedbackItem({feedback , deleteFeedbackClick , editFeedbackClick}) {

  return (
    <div className='card'>
            <button className='close' onClick={()=>deleteFeedbackClick(feedback._id)}>
                <FaTimes color="purple" />
            </button>
            <button className='close' style={{marginTop : '30px'}} onClick={()=>editFeedbackClick(feedback)}>
                <FaEdit  color="orange" />
            </button>
            <div className='num-display'>
                {feedback.rating}
                </div>
            <div className='text-display'>
                {feedback.text}</div>
        </div>
  )
}
