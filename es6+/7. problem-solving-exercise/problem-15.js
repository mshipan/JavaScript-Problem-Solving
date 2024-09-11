// Write a program that demonstrates the use of ES6 classes with inheritance,
// encapsulation, and polymorphism to create a simple inventory management system.
// The system should include classes for Product, Electronics, and Clothing, with
// methods for adding, removing, and displaying products.

class Product {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // Method to display product details
  displayProduct() {
    console.log(
      `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`
    );
  }

  // Method to add more quantity
  addQuantity(amount) {
    this.quantity += amount;
    console.log(`${amount} items added. New quantity: ${this.quantity}`);
  }

  // Method to remove quantity
  removeQuantity(amount) {
    if (amount <= this.quantity) {
      this.quantity -= amount;
      console.log(
        `${amount} items removed. Remaining quantity: ${this.quantity}`
      );
    } else {
      console.log("Insufficient quantity to remove.");
    }
  }
}

// Derived class: Electronics
class Electronics extends Product {
  constructor(name, price, quantity, warranty) {
    super(name, price, quantity);
    this.warranty = warranty; // Additional property for electronics
  }

  // Overriding displayProduct method for Electronics
  displayProduct() {
    console.log(
      `Electronics: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Warranty: ${this.warranty} years`
    );
  }
}

// Derived class: Clothing
class Clothing extends Product {
  constructor(name, price, quantity, size) {
    super(name, price, quantity);
    this.size = size; // Additional property for clothing
  }

  // Overriding displayProduct method for Clothing
  displayProduct() {
    console.log(
      `Clothing: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Size: ${this.size}`
    );
  }
}

// Polymorphism in action
function displayInventory(products) {
  products.forEach((product) => {
    product.displayProduct();
  });
}

// Creating instances of each product type
const laptop = new Electronics("Laptop", 1200, 10, 2);
const tshirt = new Clothing("T-shirt", 20, 100, "M");

// Adding and removing quantities
laptop.addQuantity(5);
laptop.removeQuantity(3);

tshirt.addQuantity(50);
tshirt.removeQuantity(20);

// Displaying the inventory using polymorphism
const inventory = [laptop, tshirt];
displayInventory(inventory);
