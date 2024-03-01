import React from 'react'

export default function FeedbackStats({feedbacks}) {
 let somme = feedbacks.reduce((a,b)=> a + b.rating ,0)
 let average = feedbacks.length > 0 ? somme/feedbacks.length : 0
    return (
    <div className='feedback-stats'>
        
        <h4> ( {feedbacks.length} ) reviews</h4>
        <h4>Average  : {average.toFixed(2)} </h4>
    </div>
  )
}
