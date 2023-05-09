class ProductManager {
    #products
    constructor() {
        this.#products = []
    }

    getProducts = () => this.#products

    getProductsById = (id) => {
        const product = this.#products.find(item => item.id === id)
        if (!product) return "Not Found ID"
        return product
    }

    #generateId = () => (this.#products.length === 0 ? 1 : this.#products[this.#products.length-1].id + 1)

    #validate = (title, description, price, code, stock, img) => {
        if (!title || !description || !price || !code || !stock || !img) {
            return `[${title}]: Campos Incompletos`
        } else {
            const found = this.#products.find(item => item.code === code)
            if (!found) return true
            return `[${title}]: El código ya existe`
        }
    }
        
    addProducts = (title, description, price, code, stock, img) => {
        (this.#validate(title, description, price, code, stock, img) === true) ? this.#products.push({id: this.#generateId(), title, description, price, code, stock, img}) : console.log(this.#validate(title, description, price, code, stock, img))
    }
}

const product = new ProductManager()
product.addProducts(`Books`, `Libro género fantástico`, `8000`, `2574`, `12`, "https://http2.mlstatic.com/D_NQ_NP_941946-MLA46913432105_072021-V.jpg")
product.addProducts(`Computers`, `180000`, `1258`, `3`, "https://images.start.com.ar/EXO-L65-2.jpg")//Falta la descripción
product.addProducts(`Cell Phones`, `Samsung Galaxy`, `140000`, `1340`, `8`, "https://tienda.movistar.com.ar/media/catalog/produ…cf95fcf479279f9ae509ad/a/2/a23-negro-frente_1.png")
product.addProducts(`GPS`, `Garmin Portatil`, `6500`, `1340`, `6`, "https://m.media-amazon.com/images/I/71mxeYQJJFL.jpg") //Código repetido

//Lista de Productos
console.log(product.getProducts())
//Busqueda de productos por ID
console.log(product.getProductsById(2))
console.log(product.getProductsById(4))
