import productModel from '../models/product.model.js'

export default class productController {
    // all products 
    getProducts(req, res) {
        const products = productModel.get();
        return res.render("product", { products, user_email: req.session.user_email });
    }

    // form for new item 
    showForm(req, res) {
        return res.render('form', { errors: null, user_email: req.session.user_email })
    }

    // add new item
    addProduct(req, res) {
        let { title, desc, price } = req.body;
        let image = `images/${req.file.filename}`;
        const products = productModel.add(title, desc, price, image);
        return res.render("product", { products, user_email: req.session.user_email });
    }

    update(req, res) {
        let id = req.params.productid;
        let product = productModel.getById(id);
        return res.render('updateform', { product, errors: null, user_email: req.session.user_email });
    }
    postUpdate(req, res) {
        let { id, title, desc, price } = req.body;
        let image = `images/${req.file.filename}`;
        const products = productModel.update(id, title, desc, price, image);
        return res.render("product", { products, user_email: req.session.user_email });
    }
    delete(req, res) {
        let id = req.params.id;
        const products = productModel.delete(id);
        return res.render("product", { products, user_email: req.session.user_email });
    }
}



