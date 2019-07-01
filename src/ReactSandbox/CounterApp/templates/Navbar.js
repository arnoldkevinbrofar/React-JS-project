import React, { Component } from 'react';
import Counters from '../Counters.js'


class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Matalino!</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About Me</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Say Hi!</a>
						</li>
					</ul>
			
				</div>
			</nav>
			</div>
			)
	}
}

export default Navbar;