// import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

// using React Props drilling
// function FeedbackList({ feedback, handleDelete }) {

// using React Context API
function FeedbackList() {
	// extrating feedback from FeedbackContext component
	const { feedback } = useContext(FeedbackContext)

	if (!feedback || feedback.length === 0) {
		return <p>No Feed back Yet!</p>
	}

	// with framer-motion animation (install framer-motion library)
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{/* using React Props drilling */}
						{/* <FeedbackItem key={i} item={item} deleteItem={handleDelete} /> */}

						{/* using React Context API & we no longer use props */}
						<FeedbackItem key={i} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>

		// without animation

		// return (
		//     <div className='feedback-list'>
		//         {feedback.map((item, i) => (
		//             <FeedbackItem
		//                 key={i}
		//                 item={item}
		//                 deleteItem={handleDelete}
		//             />
		//         ))}
		//     </div>
	)
}

// using React context we don't need propTypes

// FeedbackList.propTypes = {
// 	feedback: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			text: PropTypes.string.isRequired,
// 			rating: PropTypes.number.isRequired
// 		})
// 	)
// }

export default FeedbackList
