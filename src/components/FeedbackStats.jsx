import React, { useContext } from 'react'
import { FeedbackContext } from '../contexts/FeedbackContext'

export default function FeedbackStats() {
  const {items} = useContext(FeedbackContext)
 let somme = items.reduce((a,b)=> a + b.rating ,0)
 let average = items.length > 0 ? somme/items.length : 0
    return (
    <div className='feedback-stats'>
        
        <h4> ( {items.length} ) reviews</h4>
        <h4>Average  : {average.toFixed(2)} </h4>
    </div>
  )
}
