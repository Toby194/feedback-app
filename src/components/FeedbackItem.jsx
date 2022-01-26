import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

// using React Props drilling
// function FeedbackItem({ item, deleteItem }) {

// using React Context API, not using props
function FeedbackItem({ item }) {
	// in FeedbackContext component we used deleteFeedback & have to bring here in order to use deleteFeedback & editFeedback function using useContext hooks in FeedbackContext component
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
	
    return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			{/* This function was used passing from props */}
			{/* <button onClick={() => deleteItem(item.id)} className='close'> */}

			{/* Now here we are using React Context API useContext hooks */}
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<FaTimes color='red' />
			</button>
			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit color='red' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired
}

export default FeedbackItem
