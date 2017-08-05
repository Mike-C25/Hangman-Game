import React from 'react';

let Screen = ({ word, numberOfSpaces }) => {
	return (
		<div>
			{[...Array(numberOfSpaces)].map((v, i) => ( 
				<p key={ i }>{ word }</p> 
			))}
		</div>
	)
}

export default Screen;