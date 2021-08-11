import { Switch, Route } from "react-router-dom";
import { MostTransactedCompanies } from "./components";
import GlobalStyle from "./styles";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/most-transacted" component={MostTransactedCompanies} />
			</Switch>
		</>
	);
};

export default App;
