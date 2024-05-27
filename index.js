import express from 'express';
import productController from './src/controllers/product.controller.js';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';


// express app 
const app = express()


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory where the template files are located
app.set('views', path.join(path.resolve(), 'src', 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);

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