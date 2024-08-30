// Write a function that accepts an object representing a book (with properties like title, author, and year) and destructures it to log the details.
const book = {
  title: "Sample Book",
  author: "Shipan Mallik",
  year: 2024,
};

function bookDetails(book) {
  const { title, author, year } = book;
  console.log(`Book
    Title: ${title}
    Author: ${author}
    Year: ${year}`);
}

bookDetails(book);
