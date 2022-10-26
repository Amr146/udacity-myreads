import { useEffect, useState } from 'react';
import Book from './Book';
const BookShelf = ({ title, BookArr, updateList }) => {
	const [bookList, setBookList] = useState(BookArr);
	useEffect(() => {
		setBookList(BookArr);
	}, [BookArr]);
	return (
		Array.isArray(bookList) && (
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>{title}</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{bookList.map((book) => (
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

export default BookShelf;
