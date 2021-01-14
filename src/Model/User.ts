import Cart from "./Cart";


class User {
     id: string;
      firstName: string;
      lastName: string;
      username: string;
      location: string;
      cart: Cart;

    constructor(firstName: string, lastName: string, username: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.id = username + new Date().getMilliseconds();
    }
    
    public getId() {
        return this.id;
    }

    public getLocation() {
        return this.location;
    }

    public createCart(cart) {
        this.cart = cart;
    }
}
export default User;