export default class ProductCard {

    constructor(
        public productName: string,
        public productImage: string,
        public sellerFirstName: string,
        public productRate: number) {
        this.productName = productName;
        this.productImage = productImage;
        this.sellerFirstName = sellerFirstName;
        this.productRate = productRate;
    }
}

