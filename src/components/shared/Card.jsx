import PropTypes from 'prop-types';

function Card({ children, reverse }) {
    return (
			// Conditional class rendering
			// <div className={`card ${reverse && 'reverse'}`}>
			//     {children}
			// </div>

            // Conditional style rendering
			<div className='card' style={{
                backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff ',
                color: reverse ? '#fff' : '#000'
            }}>
				{children}
			</div>
		)
}

Card.defaultProps = {
    reverse: false,
}

Card.prtoTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card