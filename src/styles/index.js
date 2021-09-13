import { createGlobalStyle } from "styled-components";

export const theme = {
	font: "'Quattrocento Sans', sans-serif",
	lighterPurple: "#eeeef5",
	lightPurple: "#bcbddc",
	purple: "#9e9ac8",
	darkPurple: "#807dba",
	semiDarkPurple: "#5F5FB9",
	darkerPurple: "#44448C",
	evenDarkerPurple: "#262760",
	stockPageBackgroundColor: "#121722",
	errorMessageColor: "#e57373",
	lightGrey: "#a5a5a5",
	darkGrey: "#696969",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  ::-webkit-scrollbar {
		display: none;
  }
`;
