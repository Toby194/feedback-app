// import { useState } from 'react'

// we are no longer using in App component 
// import { v4 as uuidv4 } from 'uuid' 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
// import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
	// we no longer need this states, since we are passing it from FeedbackContext
	// const [feedback, setFeedback] = useState(FeedbackData)

	
	// We are moving addFeedback function to FeedbackContext component

	// const addFeedback = newFeedback => {
	// 	// console.log(newFeedback);

	// 	// install uuid library for unique id
	// 	// adding this unique id for each of feedback item in (newFeedback object)
	// 	newFeedback.id = uuidv4()

	// 	setFeedback([newFeedback, ...feedback])
	// }

	// We are moving deleteFeedback function to FeedbackContext component
	
	// const deleteFeedback = id => {
	// 	// console.log('Konichiwa', 123)
	// 	if (window.confirm('Are you sure you want to delete?')) {
	// 		setFeedback(feedback.filter(item => item.id !== id))
	// 	}
	// }

	return (
		// We are wrapping inside of FeedbackProvider which is been passed from FeedbackContext component and exported in App component
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									{/* We are passing it from FeedbackContext component */}
									{/* <FeedbackForm handleAdd={addFeedback} /> */}

									{/* Passing from FeedbackContext component */}
									<FeedbackForm />

									{/* using React Props drilling */}
									{/* <FeedbackStats feedback={feedback} /> */}

									{/* we are using React Context API, we don't have to pass through props */}
									<FeedbackStats />

									{/* Using React Prop drilling */}
									{/* <FeedbackList
										feedback={feedback}
										handleDelete={deleteFeedback}
									/> */}

									{/* Now here we are using React Context API */}
									<FeedbackList />
								</>
							}
						></Route>
						{/* Creating a route */}
						<Route path='/about' element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
