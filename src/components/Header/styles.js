import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
	font-family: ${(props) => props.theme.font};
	background-color: ${(props) => props.theme.lighterPurple};
	padding: 1rem 0 1rem;
	position: sticky;
	top: -1px;
	animation: ${(props) => {
		if (!props.$animate) return null;
		return props.$shadow ? "1s shadow ease" : "1s no-shadow ease";
	}};
	box-shadow: ${(props) =>
		props.$shadow && props.$animate ? "0 -10px 15px 15px #8892b0" : null};

	@keyframes shadow {
		0% {
			box-shadow: none;
		}
		100% {
			box-shadow: 0 -10px 15px 15px #8892b0;
		}
	}

	@keyframes no-shadow {
		0% {
			box-shadow: 0 -10px 15px 15px #8892b0;
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
	color: ${(props) => (props.$loginbtn ? "white" : props.theme.darkPurple)};
	padding: ${(props) => (props.$loginbtn ? "8px 30px" : null)};
	background-color: ${(props) => (props.$loginbtn ? props.theme.darkPurple : "")};
	border-radius: 20px;
	cursor: pointer;
`;

export const StyledLink = styled(NavLink)`
	color: ${(props) => (props.$loginbtn ? "white" : props.theme.darkPurple)};
	font-size: 1.3rem;
	text-decoration: none;
	margin-left: 10px;

	&.active {
		text-decoration: ${(props) => (props.$logout || !props.$loginbtn ? "" : "underline")};
		padding-bottom: 2px;
		border-bottom: ${(props) =>
			props.$loginbtn ? "" : `2px solid ${props.theme.darkPurple}`};
	}
`;
