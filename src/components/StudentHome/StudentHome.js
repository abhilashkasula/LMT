import React from "react";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  async loadBooks() {
    await fetch("/studentBooks", { method: "GET" })
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
          return <div>{book.name}</div>;
        })}
      </div>
    );
  }
}

export default AdminHome;
