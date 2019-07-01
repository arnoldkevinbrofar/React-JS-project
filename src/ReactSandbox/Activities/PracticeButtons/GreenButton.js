import React, {Component} from 'react';

class GreenButton extends Component {
	
	render() {
		let greenButton = "";
		if (this.props.showGreen===true) {
			greenButton = <h1>Green!</h1>
		}
		
		return(
			<div>
			{greenButton}
			<button className="btn btn-success m-5" onClick={this.props.handleShowGreen}>GreenButton</button>
			</div>
			)
		}
	}
	export default GreenButton;