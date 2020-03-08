import React,{Component} from 'react'
import Bookshelf from '../Components/Bookshelf'
import {Link} from 'react-router-dom'
 import * as BooksAPI from '../BooksAPI'

class Home extends Component{

  state={
    books:[],
  }

 componentDidMount(){
 BooksAPI.getAll().then(response=>this.setState({books:response}))
 }

changeBookShelf=(book, selection)=>{

 this.setState({
    books:this.state.books.map(bo=>{
      const tempBook = bo.id===book.id ? {...bo, shelf: selection } : bo;
      return tempBook;
 })
  
})}

handleSearch=()=>{

}

  render(){
  
    var bookList=this.state.books;

    const wantToRead=bookList.filter(book=> book.shelf==="wantToRead")
    const read=bookList.filter(book=>book.shelf==="read")
    const currentlyReading=bookList.filter(book=>book.shelf==="currentlyReading")
    console.log(bookList)
    return(<div>
      
           <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <Bookshelf show={currentlyReading} name="Curently Reading" changeCategory={this.changeBookShelf}/>
               <Bookshelf show={wantToRead} name="Want To Read" changeCategory={this.changeBookShelf}/>
               <Bookshelf show={read} name="Read" changeCategory={this.changeBookShelf}/>
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