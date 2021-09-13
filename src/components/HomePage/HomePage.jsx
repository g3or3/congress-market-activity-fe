import React from "react";
import { Header } from "../index";
import homepageImg from "../../images/homepage.jpg";
import searchpageImg from "../../images/nancy2.png";
import {
	IntroDiv,
	MainContainer,
	MiddleSection,
	SearchPageImage,
	StyledHeader,
	StyledImage,
	TopSection,
} from "./styles";

function LandingPage(props) {
	return (
		<>
			<Header />
			<MainContainer>
				<TopSection>
					<IntroDiv>
						<StyledHeader>Your Source to Congress Market Transaction Data.</StyledHeader>
					</IntroDiv>
					<StyledImage src={homepageImg} alt="homepage" />
				</TopSection>
				<MiddleSection>
					<SearchPageImage src={searchpageImg} />
				</MiddleSection>
				<div style={{ marginTop: "10%" }}>test</div>
			</MainContainer>
		</>
	);
}

export default LandingPage;
