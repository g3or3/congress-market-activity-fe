import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121722
  }
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
		</>
	);
};

export default App;
