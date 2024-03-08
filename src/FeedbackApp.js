import React, { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { feedbackData } from './data';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import {v4 as uuid} from 'uuid'

export default function FeedbackApp() {
    const [loading, setLoading] = useState(true)
    const[ items , setItems] = useState(feedbackData)
    const removeFeedback = (_id)=>{
        console.log('feedback id :' , _id)
        if(window.confirm('Are you sure ?'))
        setItems(items.filter(feed=> feed._id !== _id))
      }
     const createFeedback = (newFeedback)=>{
        setItems([{_id : uuid() ,...newFeedback} , ...items])
        console.log(items)
     } 


    setTimeout(() => {
        setLoading(false)
    }, 3000);
    if (loading) return <h2>Loading ...</h2>
    return (
        <div>  
            <Header title="test" />
            <div className='container'>
                <FeedbackForm  createFeedback={createFeedback}/>
                <FeedbackStats feedbacks={items}/>
                <FeedbackList items={items}  deleteFeedback={removeFeedback}/>
            </div>
        </div>

    )
}
