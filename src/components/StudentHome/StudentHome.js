import React from "react";

const SEARCH_BOOK_LABEL = "Search By Book Name / Book Id";
const SEARCH_BOOK = "Search Book";
const RETURN_BOOK = "RETURN";
const STUDENT_HOME_TITLE = "Student Home";
const NO_SEARCH_RESULT = "Sorry ! No search result found.";
const SEARCH_RESULTS = "Search Results";
const ASSIGNED_BOOKS = "Assigned to you";
const LIBRARY_BOOKS = "Library Books";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      libraryBooks: [],
      searchResult: [],
      searchTerm: "",
      isSearched: false
    };
  }

  async loadBooks() {
    await fetch("/student-books", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({ books: res });
      });
  }

  async loadLibraryBooks() {
    await fetch("/books", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({ libraryBooks: res });
      });
  }

  async componentDidMount() {
    await this.loadBooks();
    await this.loadLibraryBooks();
  }

  logout() {
    window.location.assign("/");
  }

  searchBook() {
    const books = this.state.libraryBooks.filter(book =>
      book.name.includes(this.state.searchTerm)
    );
    this.setState({ searchResult: books, isSearched: true });
  }

  renderSearchBook() {
    return (
      <div className="searchBookSection">
        <input
          type="text"
          name="bookName"
          placeholder={SEARCH_BOOK_LABEL}
          onChange={e => this.setState({ searchTerm: e.target.value })}
          required
        />
        <button onClick={this.searchBook.bind(this)}>{SEARCH_BOOK}</button>
      </div>
    );
  }

  renderReturnBook(book) {
    return (
      <form method="POST" action="/return-book">
        <input type="text" name="id" value={book.id} hidden={true} />
        <input type="submit" value={RETURN_BOOK} />
      </form>
    );
  }

  renderBook(book) {
    return (
      <div>
        <h2>{book.name}</h2>
        {this.renderReturnBook(book)}
      </div>
    );
  }

  renderLibraryBook(book, isReturnBookVisible = false) {
    const { name, id, assignedTo } = book;
    return (
      <div className="bookInformationContainer">
        <h2>{name}</h2>
        <h3>{id}</h3>
        <h4 className="assignedBook">{`Assigned to ${assignedTo}`}</h4>
        {isReturnBookVisible ? this.renderReturnBook(book) : null}
      </div>
    );
  }

  renderBooks(books) {
    return (
      <div className="bookShelf">
        {books.map(book => {
          return this.renderLibraryBook(book);
        })}
      </div>
    );
  }

  renderLibrayBooks() {
    return this.renderBooks(this.state.libraryBooks);
  }

  renderSearchResult() {
    return this.renderBooks(this.state.searchResult);
  }

  renderAssignedBooks() {
    return (
      <div className="bookShelf">
        {this.state.books.map(book => {
          return this.renderLibraryBook(book, true);
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="header">{STUDENT_HOME_TITLE}</h1>
          <button onClick={this.logout}>Logout</button>
        </div>
        {this.renderSearchBook()}
        <div className="bookWrapper">
          <p className="searchHeader">{SEARCH_RESULTS}</p>
          {this.state.isSearched ? (
            this.state.searchResult.length ? null : (
              <h2 className="noSearchResultLabel">{NO_SEARCH_RESULT}</h2>
            )
          ) : null}
          {this.renderSearchResult()}
        </div>
        <div className="bookWrapper">
          <p className="searchHeader">{ASSIGNED_BOOKS}</p>
          {this.renderAssignedBooks()}
        </div>
        <div className="bookWrapper">
          <p className="searchHeader">{LIBRARY_BOOKS}</p>
          {this.renderLibrayBooks()}
        </div>
      </div>
    );
  }
}

export default AdminHome;
