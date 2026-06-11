# Product Check List

A simple React application for managing a shopping/product checklist. Users can add products, search products, mark products as completed, and delete products. The project uses a local JSON Server as a mock backend and Vite for fast development.

## Features

* Add new products
* Search products by name
* Mark products as checked/unchecked
* Delete products
* Persistent data storage using JSON Server
* Loading and error handling
* Responsive React component structure

## Technologies Used

* React 18
* Vite
* Axios
* JSON Server
* React Icons
* CSS Modules

## Project Structure

```text
Product-check-list/
├── data/
│   └── db.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── addProduct/
│   │   ├── content/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── productsList/
│   │   └── searchProducts/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Product-check-list
```

### 2. Install dependencies

```bash
npm install
```

## Running the Project

### Start Frontend and Backend Together

```bash
npm start
```

This command runs:

* React application (Vite)
* JSON Server backend

### Run Frontend Only

```bash
npm run dev
```

Frontend will be available at:

```text
http://localhost:5173
```

### Run Backend Only

```bash
npm run server
```

JSON Server will run at:

```text
http://localhost:3800
```

API endpoint:

```text
http://localhost:3800/products
```

## Available Scripts

### Development Server

```bash
npm run dev
```

### JSON Server

```bash
npm run server
```

### Run Both Servers

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

## API Example

### Get Products

```http
GET /products
```

### Add Product

```http
POST /products
```

Body:

```json
{
  "id": 1,
  "checked": false,
  "name": "Milk"
}
```

### Update Product

```http
PUT /products/:id
```

### Delete Product

```http
DELETE /products/:id
```

## Author

Product Check List application built with React, Vite, Axios, and JSON Server for learning and practicing CRUD operations.
