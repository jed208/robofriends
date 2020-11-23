// https://reactjs.org/docs/react-component.html
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log('constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json()) // .json converts the response to something that can be used in javascript
			.then(users => this.setState( { robots: users }));
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
