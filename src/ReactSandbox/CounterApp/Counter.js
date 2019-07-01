import React, { Component }  from 'react';
import './Counter.css';


class Counter extends Component {
// declaring STYLE
// 	counterStlyle = {
// 		fontSize: 100
// 	}
// h1 is calling counterStyle
// <h1 className="pt-5" style={this.counterStyle}>Hello</h1>

	state = {
		counter: this.props.counter.value
		
		
		// imageUrl: 'https://picsum.photos/200'
	}

	

	formatCounter() {
		return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
	}
	// formatCounter5() {
	// 	return this.state.counter5 === 5 ? 'Five' : this.state.counter5;
	// }
	// formatCounter10() {
	// 	return this.state.counter10 === 10 ? 'Ten' : this.state.counter10;
	// }

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "danger" : "warning";
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
	// moved to Counters.js
	// handleIncrement = id => {
	// 	console.log(id);
	// 	// console.log('Increment Clicked', this.state.counter);
	// 	this.setState({counter: this.state.counter+1});
	// }

	handleDecrement = id => {
		console.log(id);
		// console.log('Increment Clicked', this.state.counter);
		this.props.counter.id > 0 ? this.setState({counter: this.props.counter.value--}) : console.log('nothing to do here');
	}

	
	// handleIncrementFive = () => {
	// 	this.setState({counter5: this.state.counter5+5})
	// }

	// handleIncrementTen = () => {
	// 	this.setState({counter10: this.state.counter10+10})
	// }

	
	
	render() {
		

		return (
			<div className="container">
			<span className={this.getBadgeClasses()}>{this.formatCounter()}</span>			
			<button className="btn btn-success m-1" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
			<button className="btn btn-warning m-1" onClick={() => this.handleDecrement({id: 1})}>Decrement</button>
			<button 
			className="btn btn-danger btn-m"
			onClick ={()=> this.props.onDelete(this.props.counter.value)}
			>Delete</button>
			</div>
			)

	}

	
}

export default Counter;