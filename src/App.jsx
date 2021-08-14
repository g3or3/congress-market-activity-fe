import { Switch, Route } from "react-router-dom";
import { SignUp, Login, MostTransactedCompanies } from "./components";
import GlobalStyle from "./styles";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/most-transacted" component={MostTransactedCompanies} />
				<Route path="/signup" component={SignUp} />
				<Route path="/login" component={Login} />
			</Switch>
		</>
	);
};

export default App;
