import React from "react";

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

  render() {
    return (
      <div>
        <h1>Student Ka home</h1>
        <form method="GET" action="/student-login">
          <input
            type="text"
            name="bookName"
            placeholder="Search By Book Name / Book Id"
            required
          />
          <input type="submit" value="Search Book" />
        </form>
        {this.state.books.map(book => {
          return (
            <div>
              <h2>{book.name}</h2>
              <form method="POST" action="/return-book">
                <input type="text" name="id" value={book.id} hidden={true} />
                <input type="submit" value="Return" />
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AdminHome;
