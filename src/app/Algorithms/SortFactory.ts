import { SortBySellerRate } from "./SortBySellerRate";
import { SortIndex } from "./SortIndex";
import { SortMethod } from "./SortMethod";
import { SortByProductRate } from "./SoryByProductRate";

export class SortFactory { 
    constructor(public prop: SortIndex = null) {
        this.prop = prop;
    }

    createSortMethod(): SortMethod {
        if (this.prop == SortIndex.PRODUCT) {
            return new SortByProductRate()
        } else if (this.prop == SortIndex.SELLER) {
            return new SortBySellerRate();
        }
    }
}