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
          return <div>{book.name}</div>;
        })}
      </div>
    );
  }
}

export default AdminHome;
