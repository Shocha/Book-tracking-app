import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route,Switch} from 'react-router-dom'
import Search from './Views/Search'
import Home from './Views/Home'


class BooksApp extends React.Component {
  
  state={
    books:[],
  }

 componentDidMount(){
 BooksAPI.getAll().then(response=>this.setState({books:response}))
 }

 moveShelf=(book,shelf)=>{
  BooksAPI.update(book,shelf)
  BooksAPI.getAll().then(response=>this.setState({books:response}))
}

  render() {
    return (
      <div className="app">
        <Switch>
        <Route exact path={"/"} render={()=>(
          <Home books={this.state.books} moveShelf={this.moveShelf}/>
        )}/>
        <Route exact path={"/search"} render={()=>(<Search moveShelf={this.moveShelf} books={this.state.books }/>)}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
