import React from 'react';
import Photo from './photo';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//anchor tag, href attribute 


function Photowap(props) {
	return <div>

		<Link className="addIcon" to="/AddPhoto"></Link>

		 <div className="photoGrid">

				{props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}

		 </div>
	</div>
}
 Photowap.propTypes = {
 	posts: PropTypes.array.isRequired,
 	onRemovePhoto: PropTypes.func.isRequired
 }

export default Photowap