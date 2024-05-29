
import path from 'path';
import productModel from '../models/product.model.js'
export default class productController {
    getProducts(req, res) {
        const products = productModel.get();
        res.render("product", { "title": "product", products });
    }
    showForm(req, res) {
        return res.render('form', { "title": "add new" })
    }
    addProduct(req, res) {
        const products = productModel.get();

        console.log(req.body)
        productModel.add(req.body)
        res.render("product", { "title": "product", products });
    }
}



