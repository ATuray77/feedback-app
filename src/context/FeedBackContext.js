import { createContext,useState } from "react"
const feedbackContext = createContext()

export const FeedbackProvicer = ({children}) => { //inorder for our components to get access 'state' and 'context'we wrap every component in a provider. 'children' are the components that's being passed in which are going to need access to context
    const [feedback, setFeedback] = useState([
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