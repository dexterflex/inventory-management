import productModel from '../models/product.model.js'

export default class productController {
    // all products 
    getProducts(req, res) {
        const products = productModel.get();
        res.render("product", { products });
    }

    // form for new item 
    showForm(req, res) {
        return res.render('form')
    }

    // add new item
    addProduct(req, res) {
        let { title, desc, price } = req.body;
        let imageUrl = `images/${req.file.filename}`;
        if (title.length > 50 || !desc || price <= 0) {
            return res.render('form')
        }
        const products = productModel.add(title, desc, price, imageUrl);
        res.render("product", { products });
    }

    update(req, res) {
        let id = req.params.productid;
        let product = productModel.getById(id);
        return res.render('updateform', { product });
    }
    postUpdate(req, res) {
        let { id, title, desc, price } = req.body;
        let imageUrl = `images/${req.file.filename}`;
        if (title.length > 50 || !desc || price <= 0) {
            return res.render('form')
        }
        const products = productModel.update(id, title, desc, price, imageUrl);
        res.render("product", { products });
    }
    delete(req, res) {
        let id = req.params.id;
        const products = productModel.delete(id);
        res.render("product", { products });
    }
}



