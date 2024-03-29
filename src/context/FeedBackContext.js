import { createContext, useState, useEffect } from "react"//we bring in useEffect cause we want to grab the data as soon as the page is loaded


const feedbackContext = createContext()

//inorder for our components to get access 'state' and 'context'we wrap every component in a provider. 'children' are the components that's being passed in which are going to need access to context

export const FeedbackProvider = ({children}) => { 
    const[isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([ //this is where state is stored
        
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({//current state
        item: {}, //whichever item we are editing goes in here; it text, rating..
        edit: false //when the edit button is clicked, it will be set to true
    })

useEffect(() => {
    fetchFeedback()
}, [])//empty dependency array cause we want it to run once when the page first loads
//fetch feedback
    const fetchFeedback= async() => {
        const response = await fetch(`/feedback?_sort=id`)//now set as a proxy
        const data = await response.json()
        
        setFeedback(data)
        setIsLoading(false)
    }

//adds feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()//gives us the new feedback fron json
        setFeedback([data, ...feedback]) //using spread operator to update
    }

//delete feedbak
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) 
        {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})//delete from backend

            setFeedback(feedback.filter((item) => item.id !== id)) //returns an array minus the one we are deleting
        }
    }
//set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({ //when the edit btn is clicked, this happen
            item, 
            edit: true//puts the item in edit mode
        })
    }

//update feedback item
    const updateFeedback = async (id, updItem) =>{

        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()

        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item)) //is the item id equal to the passed in id? if so...
    }

    return <feedbackContext.Provider value={{ //pass in the data that needs passing; functions, date, etc...
        feedback,
        feedbackEdit, //the actual piece of state that holds the item(object)
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,//function to edit
        updateFeedback
    }}>
        {children}
    </feedbackContext.Provider>
}

export default feedbackContext