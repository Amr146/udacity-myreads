import propTypes from 'prop-types';
import Book from './Book';
const BookShelf = ({ title, BookArr, updateList }) => {
	return (
		Array.isArray(BookArr) && (
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>{title}</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{BookArr.map((book) => (
							<li key={book.id}>
								<Book book={book} onBookUpdate={updateList} />
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	);
};

BookShelf.propTypes = {
	title: propTypes.string.isRequired,
	BookArr: propTypes.array.isRequired,
	updateList: propTypes.func.isRequired,
};

export default BookShelf;
