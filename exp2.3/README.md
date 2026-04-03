# E-commerce Catalog (MongoDB Aggregation Project)

## Features
- Nested schemas (variants, reviews)
- Aggregation pipeline (avg rating)
- Stock update using positional operator
- Indexing for performance

## Run
npm install
node app.js

## APIs
POST /product
GET /products
GET /avg-rating/:id
PATCH /stock/:sku
