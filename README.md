# Car Store Management System

Overview
A TypeScript-based Express application for managing a car store, using MongoDB with Mongoose for database operations. It supports car inventory management, order placement, and revenue calculation.

## Features

-   **Car Management**: Add, view, update, delete, and query cars.
-   **Order Management**: Place orders, manage inventory.
-   **Revenue Calculation**: Aggregate total revenue from all orders.
-   **Error Handling**: Structured validation and runtime error handling.

## Models

### Car

-   `brand` (string): Manufacturer (e.g., Toyota, Ford).
-   `model` (string): Model name (e.g., Camry, Focus).
-   `year` (number): Year of manufacture.
-   `price` (number): Car price.
-   `category` (string): Type (Sedan, SUV, Truck, etc.).
-   `description` (string): Car features.
-   `quantity` (number): Stock availability.
-   `inStock` (boolean): Indicates if the car is in stock.

### Order

-   `email` (string): Customer's email.
-   `car` (ObjectId): Car ID (from database).
-   `quantity` (number): Quantity ordered.
-   `totalPrice` (number): Total cost of the order.

## Endpoints

Create a Car: POST /api/cars.

Get All Cars: GET /api/cars?searchTerm=<query>.

Get a Car by ID: GET /api/cars/:carId.

Update a Car: PUT /api/cars/:carId.

Delete a Car: DELETE /api/cars/:carId.

Create an Order: POST /api/orders.

Calculate Revenue: GET /api/orders/revenue.

# Installation

Clone the repository:
git clone https://github.com/sazzadpiash/assignement2.git
cd assignment-2

Install dependencies:
npm install

Set up .env file:
MONGO_URI=<your-mongodb-uri>
PORT=5000

Run the application:
npm run dev
ENJOY!

License
MIT License
