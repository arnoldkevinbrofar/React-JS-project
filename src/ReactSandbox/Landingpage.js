import React, { Component }  from 'react';

class Landing extends Component {
	render() {
		return ( 
			<div>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
			<li class="nav-item active">
			<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#">What's Up!</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#">About</a>
			</li>
			
			</ul>
			</div>
			</nav>
			<div class="container">
			<h1 class="text-center pt-2">What's Up</h1>
			<h1 class="text-center pt-2">Mga Matatalino</h1>
			</div>
			</div>
				
			)

	}

	
}

export default Landing;