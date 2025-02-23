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

// Task 2 - Created Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;

        this.product.updateStock(this.quantity);
    }

    // Get order details
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}

// Test Case
const order1 = new Order(601, prod1, 4);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());

// Task 3 - Created Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }

    // Add a product to inventory
    addProduct(product) {
        this.products.push(product);
    }

    // List all products in inventory
    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }
}

// Test Case
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

// Task 4 - Implemented Order Management
class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }

    // Place an order only if stock is available
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order);
        } else {
            console.log(`Not enough stock for ${product.name}.`);
        }
    }

    // List all placed orders
    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
}

// Test Case
inventory.placeOrder(701, prod1, 5);
inventory.listOrders();
console.log(prod1.getDetails());


