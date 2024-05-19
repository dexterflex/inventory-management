

export default class productModel {
    constructor(_id, _name, _desc, _price, _imageUrl) {
        this.id = _id
        this.title = _name
        this.desc = _desc
        this.price = _price
        this.imageUrl = _imageUrl
    }
    static get() {
        return products;
    }
}





let products = [
    new productModel(1, "tile 1", "description for product 1", 19.99, 'https://rukminim2.flixcart.com/image/850/1000/jmnrtzk0-1/poster/5/y/t/large-book-lovers-poster-16-5-x-11-5-inch-ekdalibookslover-001-original-imaf9gfgyz6ypbas.jpeg?q=90&crop=false'),
    new productModel(2, 'title 2', 'description for product 2', 29.99, "https://static.displate.com/280x392/displate/2023-04-15/7d7060d89147fa525ba4c23583db43da_a1e6bd788df75a5ea6f083f226a3e161.jpg")

]