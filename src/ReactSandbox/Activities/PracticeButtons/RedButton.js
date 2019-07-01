import React, {Component} from 'react';

class RedButton extends Component {
	
	render() {
		let redButton = "";
		if (this.props.showRed === true) {
			redButton = <h1>RedButton</h1>
		}
		
		return(
			<div>
			{redButton}
			<button className="btn btn-warning m-5" onClick = {this.props.handleShowRed}>Red Button</button>
			</div>
			)
		}
	}
	
	export default RedButton;