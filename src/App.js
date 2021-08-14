import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/styledTheme'
import { MostTransactedCompanies, LandingPage } from './components'
import GlobalStyle from './styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/most-transacted" component={MostTransactedCompanies} />
        </Switch>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </ThemeProvider>
    </>
  )
}

export default App
