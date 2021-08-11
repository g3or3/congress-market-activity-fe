import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/breakpoints";

export const BackButton = styled(Link)`
	text-decoration: none;
	font-family: "Quattrocento Sans", sans-serif;
	color: #9e9ac8;
	font-size: 1.5rem;
	position: absolute;
	top: 3%;
	right: 3%;
	border: 4px solid #9e9ac8;
	border-radius: 35px;
	padding: 0.2% 1% 0.2%;

	&:hover {
		color: #ffffff;
		background-color: #9e9ac8;
	}
`;

export const CirclePackChartHeading = styled.h1`
	margin-top: 2%;
	margin-bottom: 1.5%;
	text-align: center;
	font-family: "Quattrocento Sans", sans-serif;
	color: #807dba;
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
	border: 4px solid #807dba;
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
	margin: 1% 0 1%;
	color: #807dba;

	@media only screen and (${device.xl}) {
		font-size: 1.1rem;
		margin: 1.5% 0 1.5%;
	}
`;

export const ListText = styled.p`
	font-family: "Quattrocento Sans", sans-serif;
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
	margin: 1% 0 0 11.4%;
	font-family: "Quattrocento Sans", sans-serif;
	color: #807dba;

	@media only screen and (${device.xl}) {
		margin-top: 0;
		margin-left: 17.1%;
	}
`;
