// Create a ShoppingCart class with private properties for items and total price.
// Include a method to add items to the cart using the rest operator, and another method
// to calculate the total price. Ensure that the items and total price cannot be
// accessed directly.

class ShoppingCart {
  // Private properties
  #items = [];
  #totalPrice = 0;

  // Method to add items to the cart
  addItems(...items) {
    this.#items.push(...items);
    console.log(`${items.length} items added to the cart.`);
  }

  // Method to calculate the total price
  calculateTotalPrice() {
    this.#totalPrice = this.#items.reduce(
      (total, item) => total + item.price,
      0
    );
    return `Total price: $${this.#totalPrice.toFixed(2)}`;
  }

  // Method to display items in the cart (for testing)
  displayItems() {
    return this.#items
      .map((item, index) => `${index + 1}. ${item.name} - $${item.price}`)
      .join("\n");
  }
}

// Creating item objects
const item1 = { name: "Laptop", price: 1200 };
const item2 = { name: "Headphones", price: 100 };
const item3 = { name: "Mouse", price: 25 };

// Using the ShoppingCart class
const cart = new ShoppingCart();

// Adding items to the cart using the rest operator
cart.addItems(item1, item2, item3);

// Displaying items in the cart (optional for testing)
console.log(cart.displayItems());

// Calculating the total price
console.log(cart.calculateTotalPrice());
