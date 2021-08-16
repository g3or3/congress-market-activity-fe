import { Switch, Route, Redirect } from "react-router-dom";
import {
	SignUp,
	Login,
	LandingPage,
	About,
	MostTransactedCompanies,
	PrivateRoute,
	Search,
} from "./components";
import { useAuth } from "./contexts/AuthContext";
import { GlobalStyle } from "./styles";

const App = () => {
	const { currentUser } = useAuth();

	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/signup">{currentUser ? <Redirect to="/" /> : <SignUp />}</Route>
				<Route path="/login">
					{currentUser ? <Redirect to="/" /> : <Login location={{}} />}
				</Route>
				<Route path="/landing" component={LandingPage} />
				<Route path="/about" component={About} />
				<Route path="/most-transacted" component={MostTransactedCompanies} />
				<PrivateRoute exact path="/" component={Search} />
			</Switch>
		</>
	);
};

export default App;
