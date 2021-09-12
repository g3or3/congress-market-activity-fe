import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MainContainer = styled.div`
	height: 100vh;
	background-color: ${(props) => props.theme.lightPurple};
`;

export const CompanyDiv = styled.div`
	width: 70%;
	height: 68%;
	border-radius: 22px;
	overflow: scroll;
	background-color: #fafafa;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
	margin: 0 auto;

	@media only screen and (${device.xl}) {
		width: 57%;
		height: 69%;
	}
`;

export const CompanyTable = styled.table`
	width: 100%;
	color: ${(props) => props.theme.darkGrey};
	border-collapse: collapse;
	max-height: 100%;
`;

export const StyledHeader = styled.tr`
	color: #ffffff;
	letter-spacing: 1px;
	font-family: ${(props) => props.theme.font};
`;

export const StyledTableHeadings = styled.th`
	background-color: ${(props) => props.theme.darkPurple};
	padding: 15px 11px;
	position: sticky;
	top: 0;
	cursor: pointer;

	@media only screen and (${device.xl}) {
		padding: 15px;
	}
`;

export const PopUp = styled.div`
	position: absolute;
	display: ${(props) => (props.$pos?.left ? "unset" : "none")};
	top: ${(props) => `${props.$pos?.top - 20}px`};
	left: ${(props) => props.$pos?.left && `${props.$pos?.left}px`};
	padding: 10px 15px 10px 25px;
	border: 3px solid ${(props) => props.theme.darkGrey};
	border-radius: 40px;
	background-color: ${(props) => props.theme.lighterPurple};
	color: ${(props) => props.theme.darkPurple};
	font-family: ${(props) => props.theme.font};
	font-size: 0.9rem;
	transform: translateY(-93%);
	width: 160px;
	pointer-events: none;
	z-index: 2;

	&:before,
	&:after {
		content: " ";
		position: absolute;
		width: 0;
		height: 0;
	}

	&:before {
		left: 35px;
		bottom: -26px;
		border: 13px solid;
		border-color: ${(props) =>
			`${props.theme.darkGrey} transparent transparent ${props.theme.darkGrey}`};
	}

	&:after {
		left: 38px;
		bottom: -19px;
		border: 10px solid;
		border-color: ${(props) =>
			`${props.theme.lighterPurple} transparent transparent ${props.theme.lighterPurple}`};
	}
`;

export const StyledRow = styled.tr`
	font-size: 0.9rem;

	&:nth-child(even) {
		background-color: #fafafa;
	}

	&:nth-child(odd) {
		background-color: #f2f2f2;
	}

	&:hover {
		background-color: #eeeef9;
	}
`;

export const StyledRowData = styled.td`
	font-family: ${(props) => props.theme.font};
	text-align: ${(props) => (props.$iscompany ? "" : "center")};
	padding: 5px 0;
	max-width: ${(props) => {
		return props.$iscompany ? "120px" : "auto";
	}};
	overflow: ${(props) => (props.$iscompany ? "hidden" : "")};
	text-overflow: ${(props) => (props.$iscompany ? "ellipsis" : "")};
	white-space: ${(props) => (props.$iscompany ? "nowrap" : "")};
	cursor: ${(props) => (props.$isdocid ? "default" : "pointer")};
`;

export const StyledUrlLink = styled.a`
	font-family: ${(props) => props.theme.font};
	padding: 3.6px 0;
	text-decoration: none;
	color: ${(props) => props.theme.purple};
	letter-spacing: 1px;
`;

export const ToolBar = styled.div`
	width: 85%;
	max-width: 1100px;
	margin: 1.2% auto 1%;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media only screen and (${device.xl}) {
		margin: 2.2% auto 2%;
		width: 55%;
	}
`;

export const MostRecentBtn = styled.div`
	color: #ffffff;
	font-family: ${(props) => props.theme.font};
	font-size: 1rem;
	background-color: ${(props) => props.theme.darkPurple};
	cursor: pointer;
	border-radius: 15px;
	padding: 12px 15px;
	display: flex;
	justify-content: center;
	letter-spacing: 1px;

	&:hover {
		background-color: ${(props) => props.theme.purple};
	}
`;

export const SearchBy = styled.div`
	border-radius: 15px;
	border: 2px solid ${(props) => props.theme.darkPurple};
	padding: 10px;
	font-size: 1rem;
	color: ${(props) => props.theme.darkPurple};
	background-color: ${(props) => props.theme.lighterPurple};
	font-family: ${(props) => props.theme.font};
	display: flex;
	flex-direction: column;
	align-items: center;
	letter-spacing: 1px;
`;

export const SearchByLabel = styled.div`
	display: flex;
	justify-content: center;
`;

export const RadioLabel = styled.label`
	margin: 0 5px;
	letter-spacing: 0;

	input[type="radio"] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	input[type="radio"]:after {
		width: 10px;
		height: 10px;
		border-radius: 15px;
		background-color: white;
		content: "";
		display: inline-block;
		border: 2px solid ${(props) => props.theme.darkPurple};
	}

	input[type="radio"]:checked:after {
		width: 10px;
		height: 10px;
		border-radius: 15px;
		background-color: ${(props) => props.theme.purple};
		content: "";
		display: inline-block;
		border: 2px solid ${(props) => props.theme.darkPurple};
	}
`;

export const SearchInput = styled.form`
	display: flex;
	align-items: center;
	width: 325px;
	height: 40px;
	max-width: 325px;
	background-color: #ffffff;
	border-radius: 15px;
	background-color: ${(props) => props.theme.lighterPurple};
`;

export const SearchBar = styled.input`
	width: 200px;
	height: 25px;
	padding: 5px 10px;
	background-color: ${(props) => props.theme.lighterPurple};
	color: ${(props) => props.theme.darkGrey};
	font-family: ${(props) => props.theme.font};
	font-size: 1rem;
	border: none;
	outline: none;
	border-radius: 15px;

	&::placeholder {
		color: ${(props) => props.theme.lightGrey};
	}
`;

export const SearchButton = styled.button`
	width: 60px;
	color: #ffffff;
	background-color: ${(props) => props.theme.darkPurple};
	font-family: ${(props) => props.theme.font};
	font-size: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0 15px 15px 0;
	height: 100%;
	flex-grow: 2;
	cursor: pointer;
	border: none;
	outline: none;
	letter-spacing: 1px;

	&:hover {
		background-color: ${(props) => props.theme.purple};
	}
`;

export const ShowingRecords = styled.div`
	width: 80px;
	background-color: ${(props) => props.theme.lighterPurple};
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${(props) => props.theme.darkPurple};
	font-size: 1.1rem;
	border-radius: 15px;
	border: 2px solid ${(props) => props.theme.darkPurple};
	padding: 5px 10px;
`;

export const SelectTotal = styled.select`
	font-size: 1.1rem;
	color: ${(props) => props.theme.darkPurple};
	background-color: ${(props) => props.theme.lighterPurple};
	font-family: ${(props) => props.theme.font};
	text-align-last: center;
	outline: none;
	border: none;
	border-radius: 15px;
	cursor: pointer;
`;
