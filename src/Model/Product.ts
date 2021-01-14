class Product {
     id: string;
     name: string;
     price: number;
     type: string;
     image: string;

    constructor(name: string, price: number, type: string) {
        this.id = name + new Date().getMilliseconds();
        this.name = name;
        this.price = price;
        this.type = type;
    }

    public get _id() {
        return this.id;
    }

    
}
 
export default Product;