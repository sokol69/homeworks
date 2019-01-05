import React, {Component} from 'react';
import FormInput from '../FormInput';
import './Form.css';
import bondImg from './assets/bond_approve.jpg';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuth: false,
			firstnameCorrectVlaue: 'james',
			lastnameCorrectValue: 'bond',
			passwordCorrectValue: '007',
			firstnameInputVlaue: '',
			lastnameInputValue: '',
			passwordInputValue: ''
		};
	};

	render() {
		if (this.state.isAuth) {
			return <div className="app-container"> <img src={bondImg} alt="bond approve" className="t-bond-image" /> </div>
		}

		return (
			<div className="app-container">
				<form className="form">

					<h1>Введите свои данные, агент</h1>

					<FormInput
						inputFor='firstname'
						inputType='text'
						changeHandler={
							event => {
								this.setState({firstnameInputVlaue: event.target.value.toLowerCase()});
								this.clearErrorFields();
							}
						}
					>
						Имя
					</FormInput>

					<FormInput
						inputFor='lastname'
						inputType='text'
						changeHandler={
							event => {
								this.setState({lastnameInputValue: event.target.value.toLowerCase()});
								this.clearErrorFields();
							}
						}
					>
						Фамилия
					</FormInput>

					<FormInput
						inputFor='password'
						inputType='password'
						changeHandler={
							event => {
								this.setState({passwordInputValue: event.target.value.toLowerCase()});
								this.clearErrorFields();
							}
						}
					>
						Пароль
					</FormInput>



					<div className="form__buttons">
						<input
							type="submit"
							value="Проверить"
							className="button t-submit"
							onClick={this.onSubmit}
						/>
					</div>

				</form>
			</div>
		);
	};

	onSubmit = event => {
		event.preventDefault();

		const checkFirstname = this.checkField(this.state.firstnameInputVlaue, this.state.firstnameCorrectVlaue, '.t-error-firstname', 'Нужно указать имя', 'Имя указано не верно');
		const checkLastname = this.checkField(this.state.lastnameInputValue, this.state.lastnameCorrectValue, '.t-error-lastname', 'Нужно указать фамилию', 'Фамилия указана не верно');
		const checkPassword = this.checkField(this.state.passwordInputValue, this.state.passwordCorrectValue, '.t-error-password', 'Нужно указать пароль', 'Пароль указан не верно');

		if (checkFirstname && checkLastname && checkPassword) {
			this.setState({
				isAuth: true
			});
		};
	};

	checkField = (field, correctValue, errorClass, emptyErrorText, wrongErrorText) => {
		const errorBlock = document.querySelector(errorClass);
		if (!field) {
			errorBlock.innerText = emptyErrorText;
		} else if (field !== correctValue) {
			errorBlock.innerText = wrongErrorText;
		} else {
			errorBlock.innerText = '';
			return true;
		};
	};

	clearErrorFields = () => {
		const errorBlocks = document.querySelectorAll('.field-error');
		let i = 0;
		for ( i; i < errorBlocks.length; i++ ) {
			errorBlocks[i].innerText = '';
		}
	};

};

export default Form;