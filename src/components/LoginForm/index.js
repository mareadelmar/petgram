import React, { useState } from "react";

const useInputValue = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = e => setValue(e.target.value);

	return { value, onChange };
};

const LoginForm = () => {
	const email = useInputValue("");
	const password = useInputValue("");

	return (
		<form>
			<input type='text' placeholder='Email' {...email} />
			<input type='password' placeholder='Password' {...password} />
			<button>iniciar sesión</button>
		</form>
	);
};

export default LoginForm;
