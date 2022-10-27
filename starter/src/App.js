import './App.css';
import * as BooksAPI from './BooksAPI';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import BookList from './components/BookList';
import SearchPage from './components/SearchPage';

function App() {
	const [books, setBooks] = useState([]);

	const getAllBooks = async () => {
		const res = await BooksAPI.getAll();
		setBooks(res);
	};
	const updateBooks = async (book, newShelf) => {
		await BooksAPI.update(book, newShelf);
		book.shelf = newShelf;
		const newBooks = books;
		if (!newBooks.find((b) => b === book)) newBooks.push(book);
		setBooks(newBooks);
	};

	useEffect(() => {
		getAllBooks();
	}, [books]);
	return (
		<Routes>
			<Route
				exact
				path='/'
				element={<BookList booksList={books} updateBooks={updateBooks} />}
			/>
			<Route
				path='/search'
				element={<SearchPage booksList={books} updateBooks={updateBooks} />}
			/>
			<Route path='*' element={<div>error 404: page was not</div>} />
		</Routes>
	);
}

export default App;
