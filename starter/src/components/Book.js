import { useState } from 'react';

const Book = ({ book, onBookUpdate }) => {
	const [shelf, setShelf] = useState(book.shelf);
	const updateShelf = (newShelf) => {
		setShelf(newShelf);
		onBookUpdate(book, newShelf);
	};

	return (
		<div className='book'>
			<div className='book-top'>
				<div
					className='book-cover'
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url("${
							book.imageLinks
								? book.imageLinks.thumbnail
								: '../../image-not-found.png'
						}")`,
					}}
				></div>
				<div className='book-shelf-changer'>
					<select
						onChange={(event) => updateShelf(event.target.value)}
						defaultValue={shelf}
					>
						<option value='no' disabled>
							Move to...
						</option>
						<option value='currentlyReading'>Currently Reading</option>
						<option value='wantToRead'>Want to Read</option>
						<option value='read'>Read</option>
						<option value='none'>None</option>
					</select>
				</div>
			</div>
			<div className='book-title'>{book.title}</div>
			<div className='book-authors'>{book.authors}</div>
		</div>
	);
};

export default Book;
