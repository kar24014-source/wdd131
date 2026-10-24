
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const reviewList = document.querySelector('#book-reviews');

articles.forEach((article, index) => {
	const review = document.createElement('article');
	review.className = 'book-review';
	review.id = index === 0 ? 'book-review' : `book-review-${article.id}`;
	review.setAttribute('aria-labelledby', `book-title-${article.id}`);

	const metadata = document.createElement('dl');
	metadata.className = 'book-meta';
	metadata.setAttribute('aria-label', 'Book information');

	const details = [
		['Review date', article.date],
		['Recommended age', article.ages],
		['Genre', article.genre]
	];

	details.forEach(([label, value]) => {
		const entry = document.createElement('div');
		const term = document.createElement('dt');
		const description = document.createElement('dd');

		term.className = 'visually-hidden';
		term.textContent = label;
		description.textContent = value;
		entry.append(term, description);
		metadata.append(entry);
	});

	const ratingEntry = document.createElement('div');
	const ratingTerm = document.createElement('dt');
	const ratingDescription = document.createElement('dd');
	const ratingStars = document.createElement('span');
	const rating = Array.from(article.stars).length;

	ratingTerm.className = 'visually-hidden';
	ratingTerm.textContent = 'Rating';
	ratingDescription.className = 'rating';
	ratingDescription.setAttribute('aria-label', `${rating} out of 5 stars`);
	ratingStars.className = 'span';
	ratingStars.setAttribute('aria-hidden', 'true');
	ratingStars.textContent = article.stars;
	ratingDescription.append(ratingStars);
	ratingEntry.append(ratingTerm, ratingDescription);
	metadata.append(ratingEntry);

	const title = document.createElement('h2');
	title.id = `book-title-${article.id}`;
	title.textContent = article.title;

	const cover = document.createElement('figure');
	cover.className = 'cover';
	const image = document.createElement('img');
	image.src = article.imgSrc;
	image.alt = article.imgAlt;
	image.loading = 'lazy';
	cover.append(image);

	const reviewCopy = document.createElement('p');
	reviewCopy.className = 'review-copy';
	reviewCopy.textContent = article.description;

	review.append(metadata, title, cover, reviewCopy);
	reviewList.append(review);
});