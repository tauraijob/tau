import React, {Component} from 'react'

class AddPhoto extends Component {
	render() {
		return (

			<div>

			<h1> Photowap </h1>
			<div className="form">
			<form>

				<input type ="text" placeholder="AddPhoto"/>
				<input type ="text" placeholder="Description"/>
				<button>Post</button>


			</form>
			</div>

			</div>


			)
	}
}
export default AddPhoto