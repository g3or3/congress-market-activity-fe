import React from "react";
import { useHistory } from "react-router-dom";
import { useLoginForm } from "../../hooks/useLoginForm";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "../index";
import img from "../../images/login.png";
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
	ImageContainer,
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
			if (
				e.message ===
				"There is no user record corresponding to this identifier. The user may have been deleted."
			) {
				setError("There is no user registered with that email.");
			} else {
				setError(e.message);
			}
		}
	};

	return (
		<div style={{ height: "100vh", width: "100%", backgroundColor: "#bcbddc" }}>
			<Header login={true} />
			<MainContainer>
				<ImageContainer>
					<img src={img} alt="Login Visual" />
				</ImageContainer>
				<LoginContainer login={true}>
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
