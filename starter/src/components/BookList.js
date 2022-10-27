import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const BookList = ({ booksList, updateBooks }) => {
	return (
		<div className='list-books'>
			<div className='list-books-title'>
				<h1>MyReads</h1>
			</div>
			<div className='list-books-content'>
				<div>
					<BookShelf
						title='Currently Reading'
						BookArr={booksList.filter(
							(book) => book.shelf === 'currentlyReading'
						)}
						updateList={updateBooks}
					/>
					<BookShelf
						title='Want to Read'
						BookArr={booksList.filter((book) => book.shelf === 'wantToRead')}
						updateList={updateBooks}
					/>
					<BookShelf
						title='Read'
						BookArr={booksList.filter((book) => book.shelf === 'read')}
						updateList={updateBooks}
					/>
				</div>
			</div>
			<div className='open-search'>{<Link to='/search'>Add a book</Link>}</div>
		</div>
	);
};

BookList.propTypes = {
	booksList: propTypes.array.isRequired,
	updateBooks: propTypes.func.isRequired,
};

export default BookList;
