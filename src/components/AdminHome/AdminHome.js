import React from "react";

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

  render() {
    return (
      <div>
        <h1>Admin Ka home</h1>
        <form method="POST" action="/add-book">
          <input type="text" name="name" placeholder="Book Name" required />
          <input type="text" name="id" placeholder="Book Id" required />
          <input type="text" name="assignedTo" value="none" required />
          <input type="submit" value="Add Book" />
        </form>
        {this.state.books.map(book => {
          return (
            <div>
              <h2>{book.name}</h2>
              <h3>{book.id}</h3>
              {book.assignedTo === "none" ? (
                <form method="POST" action="/assign-book">
                  <input type="text" name="id" placeholder="student id" />
                  <input
                    type="text"
                    name="bookId"
                    value={book.id}
                    hidden={true}
                  />
                  <input type="submit" value="Assign Book" />
                </form>
              ) : (
                <div>{`Assigned to ${book.assignedTo}`}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default AdminHome;
