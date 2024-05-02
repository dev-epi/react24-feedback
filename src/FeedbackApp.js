import React, { useState } from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { feedbackData } from './data';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import { FeedbackProvider } from './contexts/FeedbackContext';

export default function FeedbackApp() {
    const [loading, setLoading] = useState(true)
   
   


    setTimeout(() => {
        setLoading(false)
    }, 3000);
    if (loading) return <h2>Loading ...</h2>
    return (
        <div>
            <Header title="test" />
            <FeedbackProvider>
                <div className='container'>
                    <FeedbackForm/>
                    <FeedbackStats />
                    <FeedbackList  />
                </div>
            </FeedbackProvider>

           
        </div>

    )
}
