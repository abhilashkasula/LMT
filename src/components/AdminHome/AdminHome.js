import React from "react";

const NOT_ASSIGNED = "none";
const ADMIN_HOME_TITLE = "Admin Home";
class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  async loadBooks() {
    await fetch("/books", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({ books: res });
      });
  }

  async componentDidMount() {
    await this.loadBooks();
  }

  renderAssignBookOption(book) {
    return (
      <form method="POST" action="/assign-book">
        <input type="text" name="id" placeholder="student id" />
        <input type="text" name="bookId" value={book.id} hidden={true} />
        <input type="submit" value="Assign Book" />
      </form>
    );
  }

  renderAlreadyAssigned(book) {
    return <div>{`Assigned to ${book.assignedTo}`}</div>;
  }

  renderAddBook() {
    return (
      <form method="POST" action="/add-book">
        <input type="text" name="name" placeholder="Book Name" required />
        <input type="text" name="id" placeholder="Book Id" required />
        <input type="text" name="assignedTo" value="none" required />
        <input type="submit" value="Add Book" />
      </form>
    );
  }

  renderBook(book) {
    const { name, id } = book;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{id}</h3>
        {book.assignedTo === NOT_ASSIGNED
          ? this.renderAssignBookOption(book)
          : this.renderAlreadyAssigned(book)}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>{ADMIN_HOME_TITLE}</h1>
        {this.renderAddBook()}
        {this.state.books.map(book => {
          return this.renderBook(book);
        })}
      </div>
    );
  }
}

export default AdminHome;
