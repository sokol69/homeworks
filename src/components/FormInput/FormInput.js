import React, {Component} from 'react';

class FormInput extends Component {
	render() {
		return (
			<p className="field">
				<label
					className="field__label"
					htmlFor={this.props.inputFor}
				>
					<span className="field-label">{this.props.children}</span>
				</label>
				<input
					className={`field__input field-input t-input-${this.props.inputFor}`}
					type={this.props.inputType}
					name={this.props.inputFor}
					onChange={this.props.changeHandler}
				/>
				<span
					className={`field__error field-error t-error-${this.props.inputFor}`}
				>
				</span>
			</p>
		);
	};
};

export default FormInput;