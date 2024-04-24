const products=[]


module.exports = class product {
    constructor(titles) {
        this.title= this.title
    }
    save() {
        products.push(this)
    }
    static fetchAll() {
        return products
    }
}