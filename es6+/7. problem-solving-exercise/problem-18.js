// Create a User class with properties like name and email. Extend this class to
// create an Admin class that adds additional properties like role and permissions.
// Use the spread operator to merge properties from two Admin objects into a new object.

// User class definition
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Admin class extending User class
class Admin extends User {
  constructor(name, email, role, permissions) {
    super(name, email);
    this.role = role;
    this.permissions = permissions;
  }
}

// Creating two Admin objects
const admin1 = new Admin("Alice", "alice12@gmail.com", "SuperAdmin", [
  "READ",
  "WRITE",
  "DELETE",
]);
const admin2 = new Admin("Bob", "bob@gmail.com", "Moderator", [
  "READ",
  "WRITE",
]);

// Merging two Admin objects using the spread operator
const mergedAdmin = {
  ...admin1,
  ...admin2,
};

console.log(mergedAdmin);
