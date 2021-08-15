import React from "react";
import { Header } from "../index";
import stocks from "../../images/stocks.jpeg";

function LandingPage(props) {
	return (
		<>
			<Header />
			<div style={{ height: "100vh", backgroundColor: "lavender" }}>
				{/* <img style={{ width: "100%", height: "100vh" }} src={stocks} alt="people" /> */}
			</div>
		</>
	);
}

export default LandingPage;
