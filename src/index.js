import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBMPsZQNdEcDEN_dvKj3gxzcH1AQ1AzdjA';

// Create a new component. This component should produce
// some HTML

class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'talent'}, videos => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar/>
			</div>
		);
	}
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));