
import path from 'path';
import productModel from '../models/product.model.js'
export default class productController {
    getProducts(req, res) {
        // const location = path.join(path.resolve(), 'src', 'views', 'product.ejs');
        const products = productModel.get();
        res.render("product", { products });
    }
    addProduct(req, res) {
        return res.render("form")
    }
}



