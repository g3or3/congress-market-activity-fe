import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const BackButton = styled.div`
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.lightPurple};
	font-size: 1.5rem;
	position: absolute;
	top: 3%;
	right: 3%;
	border: 4px solid ${(props) => props.theme.lightPurple};
	border-radius: 35px;
	padding: 0.2% 1% 0.2%;
	cursor: pointer;

	&:hover {
		color: #ffffff;
		background-color: ${(props) => props.theme.lightPurple};
	}
`;

export const CirclePackChartHeading = styled.h1`
	margin-top: 2%;
	margin-bottom: 1.5%;
	text-align: center;
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.darkPurple};

	@media only screen and (${device.xl}) {
		margin-bottom: 2%;
	}
`;

export const MainContainer = styled.div`
	height: 80vh;
	width: 90%;
	margin: 0 auto 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

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

export const CircleChart = styled.div`
	width: 47%;
	height: 80vh;
`;

export const Note = styled.p`
	margin: 1.2% 0 0 9.7%;
	font-family: ${(props) => props.theme.font};
	color: ${(props) => props.theme.darkPurple};

	@media only screen and (${device.xl}) {
		margin-top: 1%;
		margin-left: 15.9%;
	}
`;
