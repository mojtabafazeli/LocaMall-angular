export default class ProductCard {

    constructor(
        public sellerFirstName: string,
        public sellerImage: string,
        public rate: number) {
        this.sellerImage = sellerImage;
        this.sellerFirstName = sellerFirstName;
        this.rate = rate;
    }
}

