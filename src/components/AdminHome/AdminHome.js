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
    return (
      <div className="assignedBook">{`Assigned to ${book.assignedTo}`}</div>
    );
  }

  logout() {
    window.location.assign("/");
  }

  renderAddBook() {
    return (
      <form method="POST" action="/add-book" className="addBookSection">
        <input type="text" name="name" placeholder="Book Name" required />
        <input type="text" name="id" placeholder="Book Id" required />
        <input
          type="text"
          name="assignedTo"
          value="none"
          required
          hidden={true}
        />
        <input type="submit" value="Add Book" />
      </form>
    );
  }

  renderAddStudent() {
    return (
      <form method="POST" action="/add-student" className="addBookSection">
        <input type="text" name="id" placeholder="Student ID" required />
        <input
          type="text"
          name="password"
          value="password"
          hidden={true}
          required
        />
        <input type="submit" value="Add Student" />
      </form>
    );
  }

  renderBook(book) {
    const { name, id } = book;
    return (
      <div className="bookInformationContainer">
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
        <div>
          <h1 className="header">{ADMIN_HOME_TITLE}</h1>
          <button onClick={this.logout} className="logout-button">
            Logout
          </button>
        </div>
        <div className="add-section">
          {this.renderAddBook()}
          {this.renderAddStudent()}
        </div>
        <div className="bookShelf">
          {this.state.books.map(book => {
            return this.renderBook(book);
          })}
        </div>
      </div>
    );
  }
}

export default AdminHome;
