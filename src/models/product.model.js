

class productModel {
    constructor(_id, _name, _desc, _price, _imageUrl) {
        id = _id
        title = _name
        desc = _desc
        price = _price
        imageUrl = _imageUrl
    }
    static get() {
        prodObj = {
            "id": id,
            "title": title,
            "desc": desc,
            "price": price,
            "imageUrl": imageUrl
        }
        return prodObj;
    }
}