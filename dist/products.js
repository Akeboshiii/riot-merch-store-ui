export class Product {
    constructor(title, subtitle, price, rating) {
        this.title = title;
        this.subtitle = subtitle;
        this.price = price;
        this.rating = rating;
    }
    returnPriceInString() {
        const price = this.rating;
        return `$${price}`;
    }
}
export class ProductList {
    constructor() {
        this.list = [];
    }
    addArrayToList(arr) {
        arr.forEach((product) => {
            this.list.push(new Product(product.title, product.subtitle, product.price, product.rating));
        });
    }
}
