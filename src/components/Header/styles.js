import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
	font-family: ${(props) => props.theme.font};
	background-color: white;
	padding: 1.1rem;
	position: sticky;
	top: -1px;
	animation: ${(props) => (props.shadow ? ".75s shadow ease" : ".75s no-shadow ease")};
	box-shadow: ${(props) => (props.shadow ? "0 -10px 15px 3px #8892b0" : null)};

	@keyframes shadow {
		0% {
			box-shadow: none;
		}
		100% {
			box-shadow: 0 -10px 15px 3px #8892b0;
		}
	}

	@keyframes no-shadow {
		0% {
			box-shadow: 0 -10px 15px 3px #8892b0;
		}
		100% {
			box-shadow: none;
		}
	}
`;
export const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const StyledLinkDiv = styled.div`
	color: ${(props) => (props.loginBtn ? "white" : props.theme.darkPurple)};
	padding: ${(props) => (props.loginBtn ? "7px 15px" : "3.5px 15px")};
	border: ${(props) => (props.loginBtn ? `1px solid ${props.theme.darkPurple}` : "")};
	background-color: ${(props) => (props.loginBtn ? props.theme.darkPurple : "")};
	border-radius: 20px;
`;

export const StyledLink = styled(NavLink)`
	color: ${(props) => (props.loginBtn ? "white" : props.theme.darkPurple)};
	font-size: 1.3rem;
	text-decoration: none;
	padding: 0 10px;

	&.active {
		text-decoration: ${(props) => (props.logout ? "" : "underline")};
	}
`;
