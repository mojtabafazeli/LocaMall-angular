import Product from "./Product";

class Cart {
    private id: string;
    private totalPrice: number;
    private items: Product[];
    private userId: string;

    constructor(userId) {
        this.userId= userId;
        this.id = userId + new Date().getMilliseconds();
    }

    public getId() {
        return this.id;
    }
    
    public addItem(item: Product) {
        this.items.push(item);
        this.setTotalPrice(+item.price);
    }
    public getItems() {
        return this.items;
    }

    private setTotalPrice(price: number) {
        this.totalPrice += price;
    }
    public getTotalPrice() {
        return this.totalPrice;
    }
};

export default Cart;