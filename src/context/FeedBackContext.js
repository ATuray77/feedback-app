import { v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react"


const feedbackContext = createContext()

//inorder for our components to get access 'state' and 'context'we wrap every component in a provider. 'children' are the components that's being passed in which are going to need access to context

export const FeedbackProvider = ({children}) => { 
    const [feedback, setFeedback] = useState([ //this is where state is stored
        {
            id: 1,
            text: 'I am Roliza, I love this product 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'I am Roliza, I do not really like this product 2',
            rating: 10,
        },
        {
            id: 3,
            text: 'I am Roliza! This item is a junk, so nasty 3',
            rating: 10,
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()//adds unique IDs
        setFeedback([newFeedback, ...feedback]) //using spread operator to update
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) 
        {
            setFeedback(feedback.filter((item) => item.id !== id)) //returns an array minus the one we are deleting
        }
    }

    return <feedbackContext.Provider value={{ //pass in the data that needs passing
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </feedbackContext.Provider>
}

export default feedbackContext