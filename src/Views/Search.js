import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'


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

    

    return(<div>
        
        <div className="search-books">
            <div className="search-books-bar">
              <Link  to='/'><button className="close-search" >Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                value={this.state.query} 
                onChange={(event)=>this.handleSearch(event.target.value)} />

              </div>
            </div>
            
            <div className="search-books-results">
             <ol className="books-grid">
               {this.state.searchedbooks.map(searchedbook=>{
                 let shelf="none";
                this.props.books.map(book=>(
                  book.id===searchedbook.id?
                  shelf=book.shelf:''

                ))
                                
                return( <li className="book" key={searchedbook.id}>
                 <div className="book-top">
               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${searchedbook.imageLinks?searchedbook.imageLinks.thumbnail:''})`}}></div>
               
                   <div className="book-shelf-changer">

                     <select value={shelf} onChange={e=>this.props.moveShelf(searchedbook,e.target.value)}>
                       <option value="move" disabled>Move to...</option>
                       <option value="currentlyReading">Currently Reading</option>
                       <option value="wantToRead">Want to Read</option>
                       <option value="read">Read</option>
                       <option value="none">None</option>
                     </select> </div>
                        </div>
                        <div className="book-title">{searchedbook.title}  </div>
                        </li>
               )})}
</ol>
            </div>
          </div>
    </div>)
}
}

export default Search