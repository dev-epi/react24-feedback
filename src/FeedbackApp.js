import React, { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { feedbackData } from './data';
import FeedbackStats from './components/FeedbackStats';

export default function FeedbackApp() {
    const [loading, setLoading] = useState(true)

    let items = feedbackData

    setTimeout(() => {
        setLoading(false)
    }, 3000);
    if (loading) return <h2>Loading ...</h2>
    return (
        <div>  
            <Header title="test" />
            <div className='container'>
                <FeedbackStats feedbacks={items}/>
                <FeedbackList items={items} />
            </div>
        </div>

    )
}
