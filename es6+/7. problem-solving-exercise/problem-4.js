// Write a function that generates a multiline string using template literals to describe a product's features, price, and availability.

const product = {
  name: "Samsung S20 Ultra",
  features: ["5.8-inch display", "128GB storage", "12MP camera", "4G LTE"],
  price: 160,
  available: true,
};

function generateString(p) {
  return `Product name: ${p.name}
  features: 
  ${p.features.map((feature, i) => `    ${i + 1}. ${feature}`).join("\n")}
  Price: $${p.price}
  Available: ${p.available ? "Yes" : "No"}`;
}

console.log(generateString(product));
