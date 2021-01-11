import Product from "./Product";

class Cart {
    private _id: number;
    private _totalPrice: number;
    private _items: Product[];

    constructor() {
        this._id = new Date().getMilliseconds();
    }

    public get cartId() {
        return this._id;
    }

    public addItem(item: Product) {
        this._items.push(item);
        this._setTotalPrice(item.price);
    }
    public getItems() {
        return this._items;
    }

    private _setTotalPrice(price: number) {
        this._totalPrice += price; 
    }
    public totalPrice() {
        return this._totalPrice;
    }
};

export default Cart;