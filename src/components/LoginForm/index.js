import React, { useState } from "react";
import { Form, Input, Button, Title } from "./styles";

const useInputValue = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = e => setValue(e.target.value);

	return { value, onChange };
};

const LoginForm = ({ title, disabled, handleSubmit }) => {
	const email = useInputValue("");
	const password = useInputValue("");

	return (
		<Form disabled={disabled} onSubmit={handleSubmit}>
			<Title>{title}</Title>
			<Input
				type='text'
				placeholder='Email'
				{...email}
				disabled={disabled}
			/>
			<Input
				type='password'
				placeholder='Password'
				{...password}
				disabled={disabled}
			/>
			<Button disabled={disabled}>{title}</Button>
		</Form>
	);
};

export default LoginForm;
