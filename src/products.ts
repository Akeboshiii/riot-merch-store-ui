export type productType = {
    title: string
    subtitle: string
    price: number
    rating: number
}

export class Product {
    title: string
    subtitle: string
    price: number
    rating: number
    constructor(title: string, subtitle: string, price: number, rating: number) {
        this.title = title
        this.subtitle = subtitle
        this.price = price
        this.rating = rating
    }
    
    returnPriceInString(): string {
        const price: number = this.rating
        return `$${price}`
    }
}

export class ProductList {
    list: Array<Product>
    constructor() {
        this.list = []
    }

    addArrayToList(arr: Array<productType>): void {
        arr.forEach((product) => {
            this.list.push(new Product(product.title, product.subtitle, product.price, product.rating))
        })
    }
}