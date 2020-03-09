import React,{Component} from 'react'
import Bookshelf from '../Components/Bookshelf'
import {Link} from 'react-router-dom'


class Home extends Component{


/*changeBookShelf=(book, selection)=>{

 this.setState({
    books:this.state.books.map(bo=>{
      const tempBook = bo.id===book.id ? {...bo, shelf: selection } : bo;
      return tempBook;
 })

})}*/

  render(){
  
    var bookList=this.props.books;

    const wantToRead=bookList.filter(book=> book.shelf==="wantToRead")
    const read=bookList.filter(book=>book.shelf==="read")
    const currentlyReading=bookList.filter(book=>book.shelf==="currentlyReading")

    return(<div>
      
           <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <Bookshelf show={currentlyReading} name="Curently Reading"  moveShelf={this.props.moveShelf}/>
               <Bookshelf show={wantToRead} name="Want To Read" moveShelf={this.props.moveShelf}/>
               <Bookshelf show={read} name="Read" moveShelf={this.props.moveShelf}/>
          </div>      
            <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>
          </div>
    </div>)
}
}
export default Home