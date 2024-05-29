import express from 'express';
import productController from './src/controllers/product.controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';


// express server 
const server = express()


// Set the view engine to EJS
server.set('view engine', 'ejs');

// Set the directory where the template files are located
server.set('views', path.join(path.resolve(), 'src', 'views'));

// Use express-ejs-layouts
server.use(ejsLayouts);

// Middleware to serve static files
server.use(express.static(path.join(path.resolve(), 'src', 'views')));

// Use urlencoded middleware to parse URL-encoded data
server.use(express.urlencoded({ extended: true }));

// instance of productController 
const product = new productController()

// Route to serve the HTML file
server.get('/', product.getProducts);

server.get('/new', product.showForm);

server.post('/', product.addProduct)


const PORT = 3000;
server.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server is running on post", PORT)
    }
})