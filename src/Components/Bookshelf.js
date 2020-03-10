import React,{Component} from 'react'



class Bookshelf extends Component{
  render(){

  var searchedbooks=this.props.searchedbooks

    return(<div>

<div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.show.map(book=>(
                        
                        <div className="book" key={book.id}>
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks?book.imageLinks.thumbnail:''})`}}></div>
                          <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={e=>this.props.moveShelf(book,e.target.value)}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}  </div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                      ))}
                  </ol>
                  </div>
                  </div>
                 
    
                  <div className="search-books-results">
             <ol className="books-grid">


                  {      
                  searchedbooks.map(searchedbook=>{
                 let shelf="none";
                  this.props.booksy.map(book=>(
                  book.id===searchedbook.id?
                  shelf=book.shelf:''

                ))
                                
                return( 
                <li className="book" key={searchedbook.id}>
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
               )})}</ol>
               </div>
               
               
</div>
    )
    }
  }
    export default Bookshelf