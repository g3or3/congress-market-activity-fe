import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const BackButton = styled.div`
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.darkPurple};
	font-size: 1.5rem;
	position: absolute;
	top: 3%;
	right: 3%;
	border: 2.5px solid ${(props) => props.theme.darkPurple};
	border-radius: 35px;
	padding: 0.2% 1% 0.2%;
	cursor: pointer;

	&:hover {
		color: #ffffff;
		border: 2.5px solid ${(props) => props.theme.lightPurple};
		background-color: ${(props) => props.theme.lightPurple};
	}
`;

export const CirclePackChartHeading = styled.h1`
	margin-top: 1.5%;
	margin-bottom: 3%;
	text-align: center;
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.darkPurple};

	@media only screen and (${device.xl}) {
		margin-bottom: 2%;
	}
`;

export const MainContainer = styled.div`
	height: 80vh;
	margin: 0 auto 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CircleChart = styled.div`
	width: 47%;
	height: 83vh;
	margin-left: 5%;
`;

export const Note = styled.p`
	margin: 0 4% 0 0;
	text-align: center;
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.darkPurple};
	text-align: end;

	@media only screen and (${device.xl}) {
		margin: 2% 0 0 7%;
		text-align: center;
	}
`;

export const CompanyDiv = styled.div`
	width: 35%;
	border-radius: 22px;
	overflow: hidden;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
	margin-left: 7%;

	@media only screen and (${device.xl}) {
		width: 30%;
	}
`;

export const CompanyTable = styled.table`
	width: 100%;
	color: ${(props) => props.theme.darkGrey};
	border-collapse: collapse;
	max-height: 100%;
`;

export const StyledHeader = styled.tr`
	background-color: ${(props) => props.theme.lightPurple};
	color: #ffffff;
	text-align: center;
	letter-spacing: 1px;
	font-family: ${(props) => props.theme.font};
`;

export const StyledTableHeadings = styled.th`
	padding: 10px;
	@media only screen and (${device.xl}) {
		padding: 15px;
		font-size: 1.2rem;
	}
`;

export const StyledRow = styled.tr`
	text-align: center;
	font-size: 0.8rem;

	&:nth-child(even) {
		background-color: #fafafa;
	}

	&:nth-child(odd) {
		background-color: #f2f2f2;
	}

	@media only screen and (${device.xl}) {
		font-size: 1rem;
	}
`;

export const StyledRowData = styled.td`
	font-family: ${(props) => props.theme.font};
	padding: 3.6px 0;

	@media only screen and (${device.xl}) {
		padding: 5px 0;
	}
`;

// unused

export const ListDiv = styled.div`
	width: 33%;
	height: auto;
	border: 4px solid ${(props) => props.theme.darkPurple};
	border-radius: 35px;
	padding: 2%;
	max-height: 100%;
	box-sizing: border-box;
	overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (${device.xl}) {
		width: 30%;
	}
`;

export const ListItem = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.9rem;
	margin: 0.7% 0 0.6%;
	color: ${(props) => props.theme.darkPurple};

	@media only screen and (${device.xl}) {
		font-size: 1.1rem;
		margin: 1.5% 0 1.5%;
	}
`;

export const ListText = styled.p`
	font-family: ${(props) => props.theme.font};
	margin: 0;
`;

export const ListAmount = styled.span`
	font-weight: bold;
`;
