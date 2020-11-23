// https://reactjs.org/docs/react-component.html
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

import React, { Component } from 'react';
import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import ErrorBoundary from '../../components/ErrorBoundary';
import './App.css';
// Removed line below once fetch was used
// import { robots } from './robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		// debugger
		console.log('constructor');
	}

	// This is a built-in React function
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json()) // .json converts the response to something that can be used in javascript
			.then(users => this.setState( { robots: users }));
		// this.setState({ robots: robots });
		// debugger
		console.log('componentDidMount');
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// debugger
		console.log('render');
		return !robots.length ?
			<h1 className='tc'>Loading...</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll> 
					<ErrorBoundary>
						<CardList robots={ filteredRobots } />
					</ErrorBoundary>
				</Scroll>
			</div>
		);	
	}
}

export default App;

// old code
	// render() {
	// 	const filteredRobots = this.state.robots.filter(robot => {
	// 		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	// 	})
	// 	// debugger
	// 	console.log('render');
	// 	if (this.state.robots.length === 0) {
	// 		return <h1 className='tc'>Loading...</h1>
	// 	} else {
	// 		return (
	// 			<div className='tc'>
	// 				<h1 className='f1'>RoboFriends</h1>
	// 				<SearchBox searchChange={this.onSearchChange} />
	// 				<Scroll> 
	// 					<CardList robots={ filteredRobots } />
	// 				</Scroll>
	// 			</div>
	// 		);	
	// 	}
	// }