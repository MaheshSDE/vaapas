import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Movies from './components/Movies'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)
export default App
