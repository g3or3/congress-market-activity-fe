import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MainContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Quattrocento Sans", sans-serif;
	background-color: #9e9ac8;
`;

export const LoginContainer = styled.div`
	margin: auto auto;
	width: 30%;
	height: 60vh;
	color: #807dba;
	background-color: #ffffff;
	border-radius: 50px;
	box-shadow: 0 0 10px 5px #ccc;
	box-sizing: border-box;

	@media only screen and (${device.maxlg}) {
		width: 40%;
		height: 75vh;
	}
`;

export const LoginHeading = styled.h1`
	font-size: 3.7rem;
	text-align: center;
	margin: 10% auto 4%;
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
	color: #807dba;
	font-size: 1.1rem;
`;

export const LoginInput = styled.input`
	width: 50%;
	margin: 1% 0 5%;
	padding: 1.1% 4%;
	border: 1px solid #807dba;
	border-radius: 35px;
	outline: none;
	font-size: 1.1rem;
	color: #696969;
	text-align: center;
	letter-spacing: 1px;

	&[type="password"] {
		font-weight: bold;
		letter-spacing: 1.5px;
	}
`;

export const LoginButton = styled.button`
	margin-top: 3%;
	width: 30%;
	font-family: "Quattrocento Sans", sans-serif;
	letter-spacing: 2px;
	color: #ffffff;
	background-color: #807dba;
	font-size: 1.2rem;
	border: 3px solid #807dba;
	border-radius: 35px;
	padding: 1% 5%;
	cursor: pointer;
	outline: none;

	&:hover {
		border: 3px solid #9e9ac8;
		background-color: #9e9ac8;
	}

	@media only screen and (${device.maxlg}) {
		margin-top: 2%;
		width: 27%;
	}
`;

export const FormError = styled.p`
	width: 80%;
	text-align: center;
	margin: 5% 0 0;
	font-size: 1.1rem;
	color: #e57373;
`;

export const SignUpMessage = styled(Link)`
	margin-top: 4%;
	font-family: "Quattrocento Sans", sans-serif;
	letter-spacing: 1px;
	color: #807dba;
	/* color: #6a51a3; */

	&:hover {
		color: #9e9ac8;
	}

	@media only screen and (${device.maxlg}) {
		margin-top: 6%;
	}
`;
