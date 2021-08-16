import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { GlobalStyle } from "./styles";
import {
	SignUp,
	Login,
	LandingPage,
	About,
	MostTransactedCompanies,
	PrivateRoute,
	Search,
} from "./components";

const App = () => {
	const { currentUser } = useAuth();

	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/signup">{currentUser ? <Redirect to="/" /> : <SignUp />}</Route>
				<Route
					path="/login"
					render={(props) => (currentUser ? <Redirect to="/" /> : <Login {...props} />)}
				/>
				<Route path="/home" component={LandingPage} />
				<Route path="/about" component={About} />
				<Route path="/most-popular" component={MostTransactedCompanies} />
				<PrivateRoute exact path="/" component={Search} />
				<Redirect to="/" />
			</Switch>
		</>
	);
};

export default App;
