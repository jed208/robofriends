import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// ERROR CODE TEST
	// if (true) {
	// 	throw new Error('NOOOOO!');
	// }
	return (
		<div>
			{  
				robots.map((user, i) => {
					return (
						<Card 
							key={i}
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
							username={robots[i].username} />
					);
				})
			}
		</div>
	);
}

export default CardList;


// Simplifying - ver 1
// const CardList = ({ robots }) => {
// 	const cardsArray = robots.map((user, i) => {
// 		return (
// 			<Card 
// 				id={robots[i].id} 
// 				name={robots[i].name} 
// 				email={robots[i].email} 
// 				username={robots[i].username} />
// 		);
// 	})
// 	return (
// 		<div>
// 			{ cardsArray }
// 		</div>
// 	);
// }