import React, { Component }  from 'react';
import '../CounterApp/Counter.css';


class Counter extends Component {
// declaring STYLE
// 	counterStlyle = {
// 		fontSize: 100
// 	}
// h1 is calling counterStyle
// <h1 className="pt-5" style={this.counterStyle}>Hello</h1>

	state = {
		counter: 0,
		counter5: 5,
		counter10: 10,
		
		// imageUrl: 'https://picsum.photos/200'
	}

	

	formatCounter() {
		return this.state.counter === 0 ? 'Zero' : this.state.counter;
	}
	// formatCounter5() {
	// 	return this.state.counter5 === 5 ? 'Five' : this.state.counter5;
	// }
	// formatCounter10() {
	// 	return this.state.counter10 === 10 ? 'Ten' : this.state.counter10;
	// }

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.counter === 0 ? "warning" : "primary";
		return classes;

	// }getBadgeClasses5() {
	// 	let classes = "badge m-2 badge-";
	// 	classes += this.state.counter5 === 5 ? "warning" : "danger";
	// 	return classes;

	// }getBadgeClasses10() {
	// 	let classes = "badge m-2 badge-";
	// 	classes += this.state.counter10 === 10 ? "warning" : "info";
	// 	return classes;

	}

	handleIncrement = id => {
		console.log(id);
		// console.log('Increment Clicked', this.state.counter);
		this.setState({counter: this.state.counter+1});
	}

	handleDeduct = id => {
		console.log(id);
		this.state.counter === 0 ? console.log(id) : this.setState({counter: this.state.counter-1});
	}

	
	// handleIncrementFive = () => {
	// 	this.setState({counter5: this.state.counter5+5})
	// }

	// handleIncrementTen = () => {
	// 	this.setState({counter10: this.state.counter10+10})
	// }
	
	render() {
		let deductButton="";
		if (this.state.counter!==0) {
			deductButton = <button className="btn btn-warning m-1" onClick={() => this.handleDeduct({id: 1})}>Deduct</button>
		}

		return (
			<div className="container">
				
			<span className={this.getBadgeClasses()}>{this.formatCounter()}</span>			
			<button className="btn btn-warning m-1" onClick={() => this.handleIncrement({id: 1})}>Increment</button>
			{deductButton}
			
			
			
			</div>
			)

	}

	
}

export default Counter;