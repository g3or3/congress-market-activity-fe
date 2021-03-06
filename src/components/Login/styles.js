import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MainContainer = styled.div`
	width: 100%;
	height: ${(props) => (props.signup ? "100vh" : "88vh")};
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: ${(props) => props.theme.font};
	background-color: ${(props) => props.theme.lightPurple};
`;

export const ImageContainer = styled.div`
	@media only screen and (${device.xl}) {
		margin-left: 5%;
	}
`;

export const LoginContainer = styled.div`
	width: 41%;
	min-width: 500px;
	margin-right: ${(props) => (props.login ? "6%" : 0)};
	color: ${(props) => props.theme.darkPurple};
	background-color: #ffffff;
	border-radius: 50px;
	box-shadow: 0 0 10px 5px #ccc;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	@media only screen and (${device.xl}) {
		width: 30%;
	}
`;

export const LoginHeading = styled.h1`
	font-size: 3.7rem;
	text-align: center;
	margin: 7%;
	letter-spacing: 3px;

	@media only screen and (${device.maxlg}) {
		font-size: 3.5rem;
	}
`;

export const LoginForm = styled.form`
	height: 75%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (${device.maxlg}) {
		height: auto;
	}
`;

export const FormLabel = styled.label`
	color: ${(props) => props.theme.darkPurple};
	font-size: 1.1rem;
`;

export const LoginInput = styled.input`
	width: 50%;
	margin: 1% 0 5%;
	padding: 1.1% 4%;
	border: 1px solid ${(props) => props.theme.darkPurple};
	border-radius: 35px;
	outline: none;
	font-size: 1.1rem;
	color: ${(props) => props.theme.darkGrey};
	text-align: center;
	letter-spacing: 1px;

	&::placeholder {
		color: ${(props) => props.theme.lightGrey};
	}

	&[type="password"] {
		font-weight: bold;
		letter-spacing: 1.5px;
	}
`;

export const LoginButton = styled.button`
	margin-top: 3%;
	width: 33%;
	font-family: ${(props) => props.theme.font};
	letter-spacing: 2px;
	color: #ffffff;
	background-color: ${(props) => props.theme.darkPurple};
	font-size: 1.2rem;
	border: 3px solid ${(props) => props.theme.darkPurple};
	border-radius: 35px;
	padding: 1% 5%;
	cursor: pointer;
	outline: none;

	&:hover {
		border: 3px solid ${(props) => props.theme.purple};
		background-color: ${(props) => props.theme.purple};
	}

	@media only screen and (${device.maxlg}) {
		margin-top: 2%;
		width: 28%;
	}
`;

export const FormError = styled.p`
	width: 80%;
	text-align: center;
	margin: 5% 0;
	font-size: 1.1rem;
	color: ${(props) => props.theme.errorMessageColor};
`;

export const SignUpMessage = styled(Link)`
	margin-top: 4%;
	font-family: ${(props) => props.theme.font};
	letter-spacing: 1px;
	color: ${(props) => props.theme.darkPurple};

	&:hover {
		color: ${(props) => props.theme.purple};
	}

	@media only screen and (${device.maxlg}) {
		margin-top: 6%;
	}
`;
