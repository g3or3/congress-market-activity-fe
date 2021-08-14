import { Switch, Route } from 'react-router-dom'
import {
  SignUp,
  Login,
  MostTransactedCompanies,
  LandingPage,
} from './components'
import { GlobalStyle } from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/most-transacted" component={MostTransactedCompanies} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/landing" component={LandingPage} />
      </Switch>
    </>
  )
}

export default App
