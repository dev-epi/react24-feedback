import { createContext, useEffect, useState } from "react";
import { feedbackData } from "../data";
import { v4 as uuid } from 'uuid'
import api from '../api'

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [items, setItems] = useState(feedbackData)

    useEffect(() => {
        getFeedbacks()
    })
    const getFeedbacks = () => {
        api.get('feedbacks')
            .then((response) => {
                setItems(response.data)
            }).catch((err) => console.log(err))
    }
    const removeFeedback = (_id) => {
        console.log('feedback id :', _id)
        if (window.confirm('Are you sure ?')) {


            api.delete(`delete_feedback/${_id}`)
                .then((response) => {
                    setItems(items.filter(feed => feed._id !== _id))
                }).catch((err) => console.log(err))
        }
       
    }

    const [editedFeedback, setEditedFeedback] = useState()
    const editFeedbackHandler = (feedback) => {
        setEditedFeedback(feedback)
        console.log(feedback)
    }
    const createFeedback = (newFeedback) => {
        api.post('create_feedback' ,newFeedback)
        .then((response)=>{
            setItems([response.data, ...items])
        }).catch(()=>{

        })
        
      
    }


    const updateFeedback = (feedback, id) => {
        api.put('update_feedback/'+id ,feedback)
        .then((response)=>{
           // setItems([response.data, ...items])
        }).catch(()=>{

        })
        //setItems(items.map(f => f._id === id ? { ...f, ...feedback } : f))
        setEditedFeedback()
    }
    return <FeedbackContext.Provider
        value={{
            items, removeFeedback, editedFeedback, editFeedbackHandler,
            createFeedback, updateFeedback, feedbacks: items
        }}>

        {children}
    </FeedbackContext.Provider>
}