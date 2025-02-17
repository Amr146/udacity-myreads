const api = 'https://reactnd-books-api.udacity.com';

let token = localStorage.token;

let abortController;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	Accept: 'application/json',
	Authorization: token,
};

export const get = (bookId) =>
	fetch(`${api}/books/${bookId}`, { headers })
		.then((res) => res.json())
		.then((data) => data.book);

export const getAll = () =>
	fetch(`${api}/books`, { headers })
		.then((res) => res.json())
		.then((data) => data.books);

export const update = (book, shelf) =>
	fetch(`${api}/books/${book.id}`, {
		method: 'PUT',
		headers: {
			...headers,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ shelf }),
	}).then((res) => res.json());

export const search = (query, maxResults) => {
	abortController = new AbortController();
	const abortSignal = abortController.signal;
	const res = fetch(`${api}/search`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query, maxResults }),
		signal: abortSignal,
	})
		.then((res) => res.json())
		.then((data) => data.books);
	return res;
};
export const abort = () => {
	abortController && abortController.abort();
};
