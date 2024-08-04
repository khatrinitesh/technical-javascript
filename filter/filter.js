const collectBooks = items => items.filter(item => item.type === 'book');

// Example usage:
const itemsArray = [
  { type: 'book', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: 'movie', title: 'Inception', director: 'Christopher Nolan' },
  { type: 'book', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: 'book', title: '1984', author: 'George Orwell' },
  { type: 'album', title: 'Abbey Road', artist: 'The Beatles' }
];


const books = collectBooks(itemsArray);
console.log(books);