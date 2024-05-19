
import path from 'path';

export default class productController {
    getProducts(req, res) {
        const location = path.join(path.resolve(), 'src', 'views', 'product.html');
        return res.sendFile(location);
    }
}



