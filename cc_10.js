// Task 1 - Created Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    // Return product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    // Reduce stock when an order is placed
    updateStock(quantity) {
        this.stock -= quantity;
    }
}

// Test Case
const prod1 = new Product("Bluetooth Speaker", 401, 80, 15);
console.log(prod1.getDetails());

prod1.updateStock(3);
console.log(prod1.getDetails());
