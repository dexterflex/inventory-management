import express from 'express';
import productController from './src/controllers/product.controller.js';
import path from 'path';


// express app 
const app = express()


// Middleware to serve static files
app.use(express.static(path.join(path.resolve(), 'src', 'views')));

// Route to serve the HTML file

const product = new productController()
app.get('/', product.getProducts);


const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("app is running on post", PORT)
    }
})