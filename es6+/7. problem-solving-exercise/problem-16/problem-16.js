// Create a library management system using classes and modules. The system should
// include classes for Book, Member, and Librarian, and methods for borrowing,
// returning, and cataloging books. Use encapsulation to ensure that sensitive data
// like member information is protected.

// libraryManagementSystem.js
import { Librarian } from "./librarian.js";
import { Member } from "./member.js";

// Initialize the system
const librarian = new Librarian("John Doe");

// Add books to the library catalog
console.log(
  librarian.addBook("The Great Gatsby", "F. Scott Fitzgerald", "123456789", 5)
);
console.log(librarian.addBook("1984", "George Orwell", "987654321", 3));

// Create a library member
const member = new Member("Alice", "M001");

// Borrow a book
console.log(member.borrow(librarian.searchBook("The Great Gatsby")));

// List all books in the catalog
console.log("\nLibrary Catalog:\n", librarian.listBooks());

// Check borrowed books by the member
console.log("\n", member.checkBorrowedBooks());

// Return a book
console.log(member.returnBook(librarian.searchBook("The Great Gatsby")));

// List all books in the catalog after return
console.log("\nLibrary Catalog after return:\n", librarian.listBooks());
