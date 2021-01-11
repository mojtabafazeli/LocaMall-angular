import Product from './Product';

class Seller {
    private _firstName: string;
    private _lastName: string;
    private _location: string;
    private _catalog: Product[];

    constructor(firstName: string, lastName:string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public set firstName(fistName) {
        this._firstName = fistName;
    }
    public get firstName() {
        return this._firstName;
    }

    public set lastName(lastName) {
        this._lastName = lastName;
    }
    public get lastName() {
        return this._lastName;
    }

    public set location(location) {
        this._location = location;
    }
    public get location() {
        return this._location
    }

    public addProduct(product: Product) {
        this._catalog.push(product);
    }
    public get catalog() {
        return this._catalog;
    }

}

export default Seller;