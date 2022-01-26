// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

// Using React Props drilling
// function FeedbackStats({ feedback }) {

// Here we are using React context
function FeedbackStats() {

	const { feedback } = useContext(FeedbackContext)

	// Calculate ratings average
	// using reduce function takes two arrguments accumulator and current values
	let average =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating
		}, 0) / feedback.length

	// Converting into 1 decimal place, rather than more than 1 decimal place
	// Using Regular Expression replace(/[.,]0$/, '') so it only shows 7 then 7.0
	average = average.toFixed(1).replace(/[.,]0$/, '')

	// console.log(average);

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			{/* isNaN() methods converts the value to a number before testing it.*/}
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	)
}

// We don't need propTypes when using React context

// FeedbackStats.propTypes = {
// 	feedback: PropTypes.array.isRequired
// }

export default FeedbackStats
