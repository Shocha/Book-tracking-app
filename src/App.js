import React from 'react'

import './App.css'
import {Route,Link,Switch} from 'react-router-dom'
import Search from './Views/Search'
import Home from './Views/Home'


class BooksApp extends React.Component {
  


  render() {
    return (
      <div className="app">
        <Switch>
        <Route exact path={"/search"} component={Search}/>
        <Route exact path={"/"} component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
