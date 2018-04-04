import React, { Component } from 'react';

class SearchBar extends Component {
	// <input onChange={ event => console.log(event.target.value)} /> // Alternative to adding event
	render() {
		return (
			<input onChange={this.onInputChange} />
		);
	}

	onInputChange(event) {
		console.log(event.target.value);
	}
}

export default SearchBar;