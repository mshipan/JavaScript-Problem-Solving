import { Book } from "./Book";

export class Librarian {
  constructor(name) {
    this.name = name;
    this.catalog = [];
  }

  // Method to add a book to the catalog
  addBook(title, author, isbn, copies) {
    const newBook = new Book(title, author, isbn, copies);
    this.catalog.push(newBook);
    return `Book added: ${title}`;
  }

  // Method to remove a book from the catalog
  removeBook(isbn) {
    const index = this.catalog.findIndex((book) => book.isbn === isbn);
    if (index > -1) {
      const removedBook = this.catalog.splice(index, 1)[0];
      return `Book removed: ${removedBook.title}`;
    } else {
      return `Book with ISBN ${isbn} not found in catalog.`;
    }
  }

  // Method to search for a book by title
  searchBook(title) {
    const book = this.catalog.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    return book ? book : `Book titled ${title} not found.`;
  }

  // Method to list all books
  listBooks() {
    return this.catalog
      .map((book) => `${book.title} by ${book.author}, Copies: ${book.copies}`)
      .join("\n");
  }
}
