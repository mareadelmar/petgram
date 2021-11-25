import React, { useState } from "react";
import { Form, Input, Button, Title } from "./styles";

const useInputValue = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = e => setValue(e.target.value);

	return { value, onChange };
};

const LoginForm = ({ title }) => {
	const email = useInputValue("");
	const password = useInputValue("");

	return (
		<Form>
			<Title>{title}</Title>
			<Input type='text' placeholder='Email' {...email} />
			<Input type='password' placeholder='Password' {...password} />
			<Button>{title}</Button>
		</Form>
	);
};

export default LoginForm;
