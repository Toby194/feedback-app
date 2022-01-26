import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
	return (
		<div className='about-link'>
			
			{/* Regular a tag which shouldn't be used */}
			{/* a tag is used when we for off site, like going to other website */}
			{/* <a href="/about"><FaQuestion/></a> */}

			{/* We can pass different routes */}
			{/* <Link to={{
                pathname: '/about',
                search: '?sort=name',
                hash: '#hollo'
            }}> */}

			{/* Internal linking we should use (Link) */}
			<Link to='/about'>
				<FaQuestion size={30} />
			</Link>
		</div>
	)
}

export default AboutIconLink
