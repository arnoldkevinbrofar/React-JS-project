import React, {Component} from 'react';
import './Counter.css';
import Counter from './Counter.js';

class Counters extends Component {
	state = {
		counters: [
			{'id': 1, value: 1},
			{'id': 2, value: 2},
			{'id': 3, value: 3},
			{'id': 4, value: 4}
		]
	}

	handleIncrement = counterId => {
		console.log(counterId);
		// create a temporary(virtual) variable to receive the whole array of counters
		const incrementCounters = [...this.state.counters];
		// assign to variable index the specific index 
		const index = incrementCounters.indexOf(counterId);
		// specify the index and spread operator the content(id and value)
		incrementCounters[index] = {...counterId};
		// increment the value by using ++
		incrementCounters[index].value++;
		// assign the temporary variable(virtual) to state counters
		this.setState({counters: incrementCounters});
		// this.setState({counters: this.state.counters+1});
	}

	handleDelete = idFromCounter => {
		const newCounters = this.state.counters.filter(counter => counter.id !== idFromCounter)
		this.setState({counters:newCounters})
	}

	render (){
		return(
			<div>
				{this.props.counters.map(counter => 
					<Counter 
					key={counter.id}
					counter = {counter}
					onDelete = {this.props.handleDelete}
					onIncrement = {this.props.handleIncrement}
					/>

					)}
			</div>
			)
	}
}

export default Counters;