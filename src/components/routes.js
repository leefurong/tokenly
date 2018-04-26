import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './containers/home'
import Detail from './containers/detail'
import SearchResult from './containers/searchResult'

const Routs = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/s/:key" component={SearchResult}/>
      <Route path="/detail/:token" component={Detail}/>
    </div>
  </Router>
)

export default Routs