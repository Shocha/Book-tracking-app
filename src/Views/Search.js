import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Bookshelf from '../Components/Bookshelf'


class Search extends Component{
  state={
    query:"",
    searchedbooks:[],
    
  }

  handleSearch=(query)=>{
    
    this.setState(()=>({
      query:query
    }))
    this.updateSearchedBooks(query)
  }

   updateSearchedBooks=(query)=>{
     if(query){      
    BooksAPI.search(query).then(bookdata=>{
      
      if(bookdata.error){
        this.setState({searchedbooks:[]})
      }else{
        this.setState({searchedbooks:bookdata})
      }        
      }) 
     }else{
       this.setState({searchedbooks:[]})
     }
     
  }
  
  render(){

    console.log(this.state.searchedbooks)

    return(<div>
        
        <div className="search-books">
            <div className="search-books-bar">
              <Link exact to='/'><button className="close-search" >Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                value={this.state.query} 
                onChange={(event)=>this.handleSearch(event.target.value)} />

              </div>
            </div>
            
            
              <Bookshelf searchedbooks={this.state.searchedbooks} moveshelf={this.props.moveshelf} booksy={this.props.books}/>

          
          </div>
    </div>)
}
}

export default Search