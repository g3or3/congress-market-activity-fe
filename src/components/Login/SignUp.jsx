import React from "react";
import { useHistory } from "react-router-dom";
import { useLoginForm } from "../../hooks/useLoginForm";
import { useAuth } from "../../contexts/AuthContext";
import {
	MainContainer,
	LoginContainer,
	LoginForm,
	FormLabel,
	LoginInput,
	LoginHeading,
	LoginButton,
	FormError,
} from "./styles";

const SignUp = () => {
	const { formValues, handleChange, validateForm, error, setError } = useLoginForm({
		registering: true,
	});

	const { signup } = useAuth();
	const { push } = useHistory();
	const { email, password, confirmPassword } = formValues;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!(await validateForm())) return;

		try {
			await signup(email, password);
			push("/login", { email });
		} catch (e) {
			setError(e.message);
		}
	};

	return (
		<MainContainer>
			<LoginContainer>
				<LoginHeading>Sign Up</LoginHeading>
				<LoginForm onSubmit={handleSubmit}>
					<FormLabel>Email</FormLabel>
					<LoginInput
						name="email"
						type="email"
						value={email}
						onChange={handleChange}
						placeholder="Enter a valid email address"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Enter a valid email address")}
					/>

					<FormLabel>Password</FormLabel>
					<LoginInput
						name="password"
						type="password"
						value={password}
						onChange={handleChange}
						placeholder="Enter a valid password"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Enter a valid password")}
						style={!password ? { fontWeight: "initial" } : null}
					/>

					<FormLabel>Confirm Password</FormLabel>
					<LoginInput
						name="confirmPassword"
						type="password"
						value={confirmPassword}
						onChange={handleChange}
						placeholder="Re-enter your password"
						onFocus={(e) => (e.target.placeholder = "")}
						onBlur={(e) => (e.target.placeholder = "Re-enter your password")}
						style={!confirmPassword ? { fontWeight: "initial" } : null}
					/>

					<LoginButton>Sign Up</LoginButton>

					<FormError>{error}</FormError>
				</LoginForm>
			</LoginContainer>
		</MainContainer>
	);
};

export default SignUp;
