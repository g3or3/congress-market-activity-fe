import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { ShowingRecords, SelectTotal } from "../Search/styles";

export const BackButton = styled.div`
	background-color: ${(props) => props.theme.lighterPurple};
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
		border: 2.5px solid ${(props) => props.theme.purple};
		background-color: ${(props) => props.theme.purple};
	}
`;

export const CirclePackChartHeading = styled.h1`
	padding-top: 2%;
	margin-top: 0;
	margin-bottom: 2.5%;
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
	height: 80vh;
	margin-left: 5%;
`;

export const CompanyDiv = styled.div`
	width: 35%;
	border-radius: 22px;
	overflow: hidden;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
	margin-left: 7%;
	margin-top: 1.5%;

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
	background-color: ${(props) => props.theme.purple};
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

export const Note = styled.div`
	margin: 0 4.5% 0 0;
	text-align: center;
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.darkPurple};
	text-align: end;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (${device.xl}) {
		margin: 2% 0 0 7%;
		text-align: center;
	}
`;

export const YearSelectionContainer = styled(ShowingRecords)`
	font-size: 1rem;
	display: flex;
	justify-content: center;
	margin: 0 10px;
	padding: 2px 2px;
`;

export const SelectYear = styled(SelectTotal)`
	font-size: 1rem;
`;
