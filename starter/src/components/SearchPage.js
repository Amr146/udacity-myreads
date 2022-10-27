import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import BookShelf from './BookShelf';
const SearchPage = ({ booksList, updateBooks }) => {
	const [query, setQuery] = useState('');
	const [books, setBooks] = useState([]);
	const updateQuery = (newQuery) => {
		BooksAPI.abort();
		setQuery(newQuery);
	};
	useEffect(() => {
		const updateBooks = async () => {
			if (query !== '') {
				try {
					const res = await BooksAPI.search(query, 20);
					const resWithShelf = res.map((book) => {
						const bookWithShelf = booksList.find((b) => b.id === book.id);
						return bookWithShelf
							? bookWithShelf
							: (function () {
									book.shelf = 'none';
									return book;
							  })();
					});
					setBooks(resWithShelf);
				} catch (e) {
					console.log(e);
					setBooks([]);
				}
			} else setBooks([]);
		};
		updateBooks();
	}, [query]);
	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				{
					<Link className='close-search' to='/'>
						Close
					</Link>
				}
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						placeholder='Search by title, author, or ISBN'
						value={query}
						onChange={(event) => updateQuery(event.target.value)}
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<ol className='books-grid'>
					<BookShelf
						title='Search Results'
						BookArr={books}
						updateList={updateBooks}
					/>
				</ol>
			</div>
		</div>
	);
};

SearchPage.propTypes = {
	booksList: propTypes.array.isRequired,
	updateBooks: propTypes.func.isRequired,
};

export default SearchPage;
