import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
	const [term, setTerm] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		// TODO: make sure we call
		// callback from parent component 
		onFormSubmit(term);
	};

	return (
		<div className="search-bar ui segment" >
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input 
						type="text" 
						value={term} 
						onChange={(event) => setTerm(event.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

//Using class components
// class SearchBar extends React.Component {
	// state = { term: '' };

	// onInputChange = (event) => {
	// 	this.setState({ term: event.target.value });
	// };

	// onFormSubmit = (event, props) => {
	// 	event.preventDefault();

	// 	// TODO: make sure we call
	// 	// callback from parent component 
	// 	this.props.onFormSubmit(this.state.term);
	// };

// 	render() {
// 		return (
// 			<div className="search-bar ui segment" >
// 				<form onSubmit={this.onFormSubmit} className="ui form">
// 					<div className="field">
// 						<label>Video Search</label>
// 						<input 
// 							type="text" 
// 							value={this.state.term} 
// 							onChange={this.onInputChange}
// 						/>
// 					</div>
// 				</form>
// 			</div>
// 		);
// 	}
// }

export default SearchBar;