import Product from './Product';

class Seller {
     id: string;
     firstName: string;
     lastName: string;
     username: string;
     location: string;
     catalog: string[];
     rate: number = 0;

    constructor(firstName: string, lastName: string, username: string) {
        this.id = username + new Date().getMilliseconds()
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

function addProduct(product: Product) {
    this.catalog.push(product);
}

function setRate(rate: number) {
    this.rate += rate;
    this.rate /= 2;
}

export default Seller;