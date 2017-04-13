import React, { Component } from 'react';

class InputBar1 extends Component {
	constructor(props) {
		super(props);

		this.state = { inputTerm : '' };
	}

	onInputChange(term) {
		console.log(term);
		this.setState({ inputTerm : term}, () => {
			console.log(this.state.inputTerm);
		});

	}

	render () {
		return (
			<div>
				This one uses an input function in the Input Bar App
				<input
					value={this.state.inputTerm}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

export default InputBar1;
