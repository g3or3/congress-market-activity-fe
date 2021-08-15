import React from "react";
import { useHistory } from "react-router-dom";
import { useLoginForm } from "../../hooks/useLoginForm";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "../index";
import {
	MainContainer,
	LoginContainer,
	LoginForm,
	FormLabel,
	LoginInput,
	LoginHeading,
	LoginButton,
	FormError,
	SignUpMessage,
} from "./styles";

const Login = ({ location: { state } }) => {
	const { formValues, handleChange, validateForm, error, setError } = useLoginForm({
		registering: false,
		email: state?.email,
	});

	const { login } = useAuth();
	const { push } = useHistory();
	const { email, password } = formValues;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!(await validateForm())) return;

		try {
			await login(email, password);
			push("/");
		} catch (e) {
			setError(e.message);
		}
	};

	return (
		<div style={{ height: "100vh", width: "100%", backgroundColor: "#9e9ac8" }}>
			<Header />
			<MainContainer>
				<LoginContainer>
					<LoginHeading>Login</LoginHeading>
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

						<LoginButton>Login</LoginButton>

						<SignUpMessage to="/signup">Click here to sign up</SignUpMessage>

						<FormError>{error}</FormError>
					</LoginForm>
				</LoginContainer>
			</MainContainer>
		</div>
	);
};

export default Login;
