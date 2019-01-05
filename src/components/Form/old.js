// import React, {Component} from 'react';
// import FormInput from '../FormInput';
// import './Form.css';

// const firstnameRef = React.createRef();
// const lastnameRef = React.createRef();
// const passwordRef = React.createRef();
// const errorFirstnameRef = React.createRef();
// const errorLastnameRef = React.createRef();
// const errorPasswordRef = React.createRef();

// class Form extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			isAuth: false,
// 			firstnameCorrectVlaue: 'James',
// 			lastnameCorrectValue: 'Bond',
// 			passwordCorrectValue: '007',
// 			inputList: [
// 				{
// 					inputType: 'text',
// 					inputFor: 'firstname',
// 					inputValue: 'Имя',
// 					inputRef: firstnameRef,
// 					errorRef: errorFirstnameRef,
// 					fieldValue: ''
// 				},
// 				{
// 					inputType: 'text',
// 					inputFor: 'lastname',
// 					inputValue: 'Фамилия',
// 					inputRef: lastnameRef,
// 					errorRef: errorLastnameRef,
// 					fieldValue: ''
// 				},
// 				{
// 					inputType: 'password',
// 					inputFor: 'password',
// 					inputValue: 'Пароль',
// 					inputRef: passwordRef,
// 					errorRef: errorPasswordRef,
// 					fieldValue: ''
// 				},
			
// 			],
// 			firstnameInputVlaue: '',
// 			lastnameInputValue: '',
// 			passwordInputValue: ''
// 		};
// 	};

// 	render() {
// 		return (
// 			<div className="app-container">
// 				<form className="form">

// 					<h1>Введите свои данные, агент</h1>

// 					{this.state.inputList.map(item =>
// 						<FormInput
// 							inputType={item.inputType}
// 							inputFor={item.inputFor}
// 							key={item.inputFor}
// 							refValue={item.inputRef}
// 							refError={item.errorRef}
// 							fieldValue={item.fieldValue}
// 							changeHandler={this.changeHandler}
// 						>
// 							{item.inputValue}
// 						</FormInput>
// 					)}

// 					<div className="form__buttons">
// 						<input
// 							type="submit"
// 							value="Проверить"
// 							className="button t-submit"
// 							onClick={this.onSubmit}
// 						/>
// 					</div>

// 				</form>
// 			</div>
// 		);
// 	};

// 	changeHandler = event => {
// 		console.log(event.target.value);
// 	};

// 	onSubmit = event => {
// 		event.preventDefault();

// 		this.handleSubmit(firstnameRef.current, errorFirstnameRef.current);
// 		// this.handleSubmit(lastnameRef.current);
// 		// this.handleSubmit(passwordRef.current);

// 		// console.log(firstnameRef);
// 		// console.log(lastnameRef);
// 		// console.log(passwordRef);
		
// 	};

// 	handleSubmit = (input, errorBlock) => {
// 		const fieldName = input.getAttribute('data');
// 		if (!input.value.length) {
// 			console.log(input.name, '--error!');
// 			errorBlock.innerText = `Нужно указать ${fieldName}`;
// 		}else {
// 			console.log(input.value);
// 		};
// 	};
// };

// export default Form;

<FormInput
inputFor='lastname'
inputType='text'
changeHandler={this.changeHandler(this.state.lastnameInputValue)}
>
Фамилия
</FormInput>

<FormInput
inputFor='password'
inputType='password'
changeHandler={this.changeHandler(this.state.passwordInputValue)}
>
Пароль
</FormInput>

<img src="/static/media/bond_approve.jpg" alt="bond approve" class="t-bond-image"></img>