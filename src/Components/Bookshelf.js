import React,{Component} from 'react'



class Bookshelf extends Component{
  render(){

  

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
                 
    
    
               
               
</div>
    )
    }
  }
    export default Bookshelf