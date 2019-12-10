import React from "react";
import { Link } from "react-router-dom";

const LIBRARY_HEADER = "Library Management";
const ADMIN_LOGIN = "Log In as Admin";
const STUDENT_LOGIN = "Log In as Student";
const STUDENT_REGISTRATION = "Register as student";
const LIBRARYINFO =
	'The main purpose of this system "Library Management System" is to reduce human effort, piles of books and to provide various facilities to the librarian to manage the library using a computerized system where he/she can record various transactions like issue of books,  addition of new books, addition of new students, can keep track of all the books in the library, can retrieve the details of books available in the library, can check how many books are available in the library. This system should also provides facilities to users/students such as, user/student can check the borrowed books, can return, can search for books.';
const TOTAL = `Total Number of Books in Library is:`;
const MOST_READ_BOOKS = "Most Read Books";
class Home extends React.Component {
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

	async loadLibraryBooks() {
		await fetch("/books", { method: "GET" })
			.then(res => res.json())
			.then(res => {
				this.setState({ libraryBooks: res });
			});
	}

	async componentDidMount() {
		await this.loadLibraryBooks();
	}

	renderBook(book) {
		return (
			<div className="bookInformationContainer">
				<h2>{book.name}</h2>
			</div>
		);
	}

	renderLibraryBook(book) {
		const filterBook = "Geek Love,Desert Solitaire".split(",");
		const { name } = book;
		return filterBook.includes(name) ? this.renderBook(book) : null;
	}

	renderMostReadBooks() {
		return (
			<div className="bookShelf">
				{this.state.libraryBooks.map(book => {
					return this.renderLibraryBook(book);
				})}
			</div>
		);
	}

	render() {
		return (
			<div className="homeScreenOptions">
				<h3 className="header">{LIBRARY_HEADER}</h3>
				<div className="hometext">{LIBRARYINFO}</div>
				<h3 className="hometext">
					{TOTAL}
					{this.state.libraryBooks.length}
				</h3>
				<div className="bookWrapper">
					<p className="mostReadBooks">{MOST_READ_BOOKS}</p>
					{this.renderMostReadBooks()}
				</div>
				<div className="loginOptionContainer">
					<Link to="/admin-login" className="option">
						{ADMIN_LOGIN}
					</Link>
					<Link to="/student-login" className="option">
						{STUDENT_LOGIN}
					</Link>
					<Link to="/registration" className="option">
						{STUDENT_REGISTRATION}
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
