import React, { Component } from 'react'

class Book extends Component{
  render(){
    const books=this.props.show
    
    return(<div>{books.map(bookw=>(
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookw.imageLinks.thumbnail})`}}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">bookw.title  </div>
      <div className="book-authors">bookw.authors[0]</div>
    </div>
    ))}
    </div>

    );
}
}
export default Book