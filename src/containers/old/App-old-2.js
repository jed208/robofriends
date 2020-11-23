// Updated: Nov 23, 2020
// Updated code for React Hooks to clean things up
// Removes constructor for setting state and componentDidMount lifecycle check
// Uses useState and useEffect instead

// https://reactjs.org/docs/react-component.html
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// 	console.log('constructor');
	// }
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchfield] = useState('')

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json()) // .json converts the response to something that can be used in javascript
	// 		.then(users => this.setState( { robots: users }));
	// 	console.log('componentDidMount');
	// }

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json()) // .json converts the response to something that can be used in javascript
			.then(users => setRobots(users));
	}, []) // React quirk needs an empty array as the second param for useEffect, otherwise, it detects a change and runs again causing an infinite loop

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	
	return !robots.length ?
		<h1 className='tc'>Loading...</h1> :
	(
		<div className='tc'>
			<title>Robofriends</title>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll> 
				<ErrorBoundary>
					<CardList robots={ filteredRobots } />
				</ErrorBoundary>
			</Scroll>
		</div>
	)
}

export default App;
