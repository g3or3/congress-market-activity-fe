import styled from "styled-components";

export const MainContainer = styled.div`
	/* height: 100vh; */
	background-color: ${(props) => props.theme.lighterPurple};
`;

export const TopSection = styled.section`
	display: flex;
	justify-content: center;
	padding: 80px 0;
	/* background-color: ${(props) => props.theme.lightPurple}; */
`;

export const IntroDiv = styled.div`
	/*  */
`;

export const StyledHeader = styled.h1`
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.semiDarkPurple};
	letter-spacing: 3px;
	/* text-shadow: 1px 1px 2px white; */
	font-size: 3.2rem;
	width: 375px;
	margin-right: 10%;
`;

export const StyledImage = styled.img`
	width: 500px;
	border-radius: 30%;
	margin-left: 10%;
`;

export const MiddleSection = styled.section`
	width: 100%;
	padding: 150px 0;
	background-color: ${(props) => props.theme.purple};
	/* height: ; */
	margin: 15% auto 0;
	display: flex;
	justify-content: center;
`;

export const SearchPageImage = styled.img`
	width: 70%;
	border-radius: 15px;
`;
