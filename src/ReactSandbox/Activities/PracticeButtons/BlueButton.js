import React, {Component} from 'react';

class BlueButton extends Component {
	
	render() {
		let blueButton = "";
		if (this.props.showBlueButton === true) {
			blueButton = <h1>BlueButton</h1>
		}
		
		return(
			<div>
			{blueButton}
			<button className="btn btn-info m-5" onClick = {this.props.handleShowBlueButton}>BlueButton</button>
			</div>
			)
		}
	}
	
	export default BlueButton;