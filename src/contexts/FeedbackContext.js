import { createContext, useState } from "react";
import { feedbackData } from "../data";
import { v4 as uuid } from 'uuid'


export const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{

    const [items, setItems] = useState(feedbackData)
    const removeFeedback = (_id) => {
        console.log('feedback id :', _id)
        if (window.confirm('Are you sure ?'))
            setItems(items.filter(feed => feed._id !== _id))
    }

    const [editedFeedback, setEditedFeedback] = useState()
    const editFeedbackHandler = (feedback) => {
        setEditedFeedback(feedback)
        console.log(feedback)
    }
    const createFeedback = (newFeedback) => {
        setItems([{ _id: uuid(), ...newFeedback }, ...items])
        console.log(items)
    }

   
    const updateFeedback = (feedback, id) => {

        setItems(items.map(f => f._id === id ? { ...f, ...feedback } : f))
        setEditedFeedback()
    }
    return <FeedbackContext.Provider 
    value={{items , removeFeedback , editedFeedback , editFeedbackHandler , 
    createFeedback , updateFeedback , feedbacks : items}}>
        
        {children}
    </FeedbackContext.Provider>
}