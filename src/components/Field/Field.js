import React, { Component } from 'react';

import './Field.scss';

class Field extends Component {
	constructor() {
		super();

		this.state = {
			text: '',
			error: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		// this.handleSelect = this.handleSelect.bind(this);

	}

	handleChange(event) {
		let text = event.target.value;
		if(text.length < 100) {
			this.setState({text: text, error: ''});
		}
		else {
			text = text.substring(0, 100);
			this.setState({text: text, error: 'Your text should be not more than 100 characters'});
		}
	}

	handleKeyDown(event) {
		if(event.key === 'Enter') {
			event.preventDefault();
			if(!this.state.error && this.state.text.length > 0) {
				console.log('You send: ', this.state.text);
				this.setState({text: ''});
			}
		}
	}

	handleBlur() {
		this.setState({error: ''});
	}

	handleFocus(event) {
		if(!(this.state.text.length < 100)) {
			this.setState({error: 'Your text should be not more than 100 characters'})
		}
	}

	/*handleSelect(event) {
		if(this.state.error) {
			this.setState({error: ''});
		}
	}*/

	render() {
		return (
			<div className="field">
				<h2>Enter something...</h2>
				<textarea
					className="form-control"
					value={this.state.text}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					onBlur={this.handleBlur}
					onFocus={this.handleFocus}
					// onSelect={this.handleSelect}
				></textarea>
				{this.state.error ?
					<div className="error">{this.state.error}</div>
					: null }
			</div>
		)
	}
}

export default Field;
