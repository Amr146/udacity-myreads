import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookList = ({ booksList, updateBooks }) => {
	const [books, setBooks] = useState(booksList);
	useEffect(() => {
		setBooks(booksList);
	}, [booksList]);
	return (
		<div className='list-books'>
			<div className='list-books-title'>
				<h1>MyReads</h1>
			</div>
			<div className='list-books-content'>
				<div>
					<BookShelf
						title='Currently Reading'
						BookArr={books.filter((book) => book.shelf === 'currentlyReading')}
						updateList={updateBooks}
					/>
					<BookShelf
						title='Want to Read'
						BookArr={books.filter((book) => book.shelf === 'wantToRead')}
						updateList={updateBooks}
					/>
					<BookShelf
						title='Read'
						BookArr={books.filter((book) => book.shelf === 'read')}
						updateList={updateBooks}
					/>
				</div>
			</div>
			<div className='open-search'>{<Link to='/search'>Add a book</Link>}</div>
		</div>
	);
};

export default BookList;
