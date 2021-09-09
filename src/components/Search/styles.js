import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const MainContainer = styled.div`
	height: 100vh;
	background-color: ${(props) => props.theme.lightPurple};
`;

export const CompanyDiv = styled.div`
	width: 75%;
	height: 80%;
	border-radius: 22px;
	overflow: scroll;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
	margin: 2% auto;

	@media only screen and (${device.xl}) {
		height: 84.5%;
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
	text-align: center;
	letter-spacing: 1px;
	font-family: ${(props) => props.theme.font};
`;

export const StyledTableHeadings = styled.th`
	background-color: ${(props) => props.theme.purple};
	padding: 10px;
	position: sticky;
	top: 0;
	/* @media only screen and (${device.xl}) {
		padding: 15px;
		font-size: 1.2rem;
	} */
`;

export const StyledRow = styled.tr`
	font-size: 0.8rem;

	&:nth-child(even) {
		background-color: #fafafa;
	}

	&:nth-child(odd) {
		background-color: #f2f2f2;
	}

	/* @media only screen and (${device.xl}) {
		font-size: 1rem;
	} */
`;

export const StyledRowData = styled.td`
	font-family: ${(props) => props.theme.font};
	text-align: ${(props) => (!props.$iscompany ? "center" : "")};
	padding: 5px 0;

	max-width: ${(props) => {
		if (props.$isdocid) return "10px";
		if (props.$isfirstname) return "40px";
		if (props.$islastname) return "40px";
		if (props.$iscompany) return "120px";
		if (props.$isasset) return "90px";
		if (props.$isdescription) return "140px";
		else return "auto";
	}};
	overflow: ${(props) => (props.$iscompany || props.$isasset ? "hidden" : "")};
	text-overflow: ${(props) => (props.$iscompany || props.$isasset ? "ellipsis" : "")};
	white-space: ${(props) => (props.$iscompany || props.$isasset ? "nowrap" : "")};

	/* @media only screen and (${device.xl}) {
		padding: 5px 0;
	} */
`;

export const StyledUrlLink = styled.a`
	font-family: ${(props) => props.theme.font};
	padding: 3.6px 0;
	text-decoration: none;
	color: ${(props) => props.theme.purple};
`;
