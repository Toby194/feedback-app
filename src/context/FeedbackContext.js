import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
// import FeedbackData from '../data/FeedbackData'

// Creating a variable FeedbackContext & setting to createContext()
const FeedbackContext = createContext()

// Creating a variable FeedbackProvider and passing a children
export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This is feedback item 1',
			rating: 10
		},
		{
			id: 2,
			text: 'This is feedback item 2',
			rating: 9
		},
		{
			id: 3,
			text: 'This is feedback item 3',
			rating: 7
		}
	])

	// const [feedback, setFeedback] = useState(FeedbackData)

	// This will be targeting the FaEdit button in FeedbackItem component
	
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {}, // by default it will be empty string unless we press edit button
		edit: false // if we click the edit mode it will be true, otherwise is false
	})

	// Add feedback function
	const addFeedback = newFeedback => {
		// console.log(newFeedback);

		// install uuid library for unique id
		// adding this unique id for each of feedback item in (newFeedback object)
		newFeedback.id = uuidv4()

		setFeedback([newFeedback, ...feedback])
	}

	// Delete feedback function
	const deleteFeedback = id => {
		// console.log('Konichiwa', 123)
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter(item => item.id !== id))
		}
	}

	// Update feedback item
	const updateFeedback = (id, updItem) => {
		// console.log(id, updItem);
		setFeedback(
			feedback.map(item => (item.id === id ? { ...item, ...updItem } : item))
		)
	}

	// Set item to be updated
	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit, //This is the actual state that holds the state boolean
				deleteFeedback,
				addFeedback,
				editFeedback, //This is the function when i press the edit button
				updateFeedback
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
