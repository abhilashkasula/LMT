import React from "react";

const SEARCH_BOOK_LABEL = "Search By Book Name / Book Id";
const SEARCH_BOOK = "Search Book";
const RETURN_BOOK = "RETURN";
const STUDENT_HOME_TITLE = "Student Home";
class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  async loadBooks() {
    await fetch("/student-books", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({ books: res });
      });
  }

  async componentDidMount() {
    await this.loadBooks();
  }

  renderSearchBook() {
    return (
      <form method="GET" action="/student-login">
        <input
          type="text"
          name="bookName"
          placeholder={SEARCH_BOOK_LABEL}
          required
        />
        <input type="submit" value={SEARCH_BOOK} />
      </form>
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

  render() {
    return (
      <div>
        <h1>{STUDENT_HOME_TITLE}</h1>
        {this.renderSearchBook()}
        {this.state.books.map(book => {
          return this.renderBook(book);
        })}
      </div>
    );
  }
}

export default AdminHome;
