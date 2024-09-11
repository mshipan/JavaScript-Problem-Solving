export class Book {
  constructor(title, author, isbn, copies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.copies = copies;
  }

  // Method to check availability
  isAvailable() {
    return this.copies > 0;
  }

  // Method to borrow a book
  borrowBook() {
    if (this.isAvailable()) {
      this.copies -= 1;
      return `Book borrowed: ${this.title}`;
    } else {
      return `Sorry, ${this.title} is currently unavailable.`;
    }
  }

  // Method to return a book
  returnBook() {
    this.copies += 1;
    return `Book returned: ${this.title}`;
  }
}
