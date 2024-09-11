export class Member {
  #memberId; // Encapsulation of sensitive member ID
  #borrowedBooks; // Encapsulation of borrowed books
  constructor(name, memberId) {
    this.name = name;
    this.#memberId = memberId;
    this.#borrowedBooks = [];
  }

  // Method to borrow a book
  borrow(book) {
    if (book.isAvailable()) {
      this.#borrowedBooks.push(book.title);
      return book.borrowBook();
    } else {
      return `Cannot borrow ${book.title}; it is not available.`;
    }
  }

  // Method to return a book
  returnBook(book) {
    const index = this.#borrowedBooks.indexOf(book.title);
    if (index > -1) {
      this.#borrowedBooks.splice(index, 1);
      return book.returnBook();
    } else {
      return `This book was not borrowed by ${this.name}.`;
    }
  }

  // Method to check borrowed books
  checkBorrowedBooks() {
    return `Books borrowed by ${this.name}: ${
      this.#borrowedBooks.join(", ") || "None"
    }`;
  }
}
