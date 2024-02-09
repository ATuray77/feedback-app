import { createContext,useState } from "react"
const feedbackContext = createContext()

//inorder for our components to get access 'state' and 'context'we wrap every component in a provider. 'children' are the components that's being passed in which are going to need access to context

export const FeedbackProvider = ({children}) => { 
    const [feedback, setFeedback] = useState([ //this is where state is stored
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])
    return <feedbackContext.Provider value={{
        feedback: feedback,
    }}>
        {children}
    </feedbackContext.Provider>
}

export default feedbackContext