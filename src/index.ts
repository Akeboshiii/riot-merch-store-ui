import { Product, ProductList } from './products.js'
import { productDetailsList } from './list.js'

let list = new ProductList()

list.addArrayToList(productDetailsList)
console.log(list);















document.querySelector('.hero_cta_button')?.addEventListener('click', () => {
    location.href = "#products_title"
})

document.querySelector('.brand_text')?.addEventListener('click', () => {
    location.href = "#"
})