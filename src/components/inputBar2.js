import React from 'react';

const InputBar2 = (props) => {
		return (
			<div>
				This one uses an input function in the Main App
				<input
					value={props.inputTerm}
					onChange={props.onInput2Change}
				/>
				<br/>
				The prop testValue is {props.testValue}
			</div>
		);
}

export default InputBar2;
