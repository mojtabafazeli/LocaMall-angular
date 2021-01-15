import { SortBySellerRate } from "./SortBySellerRate";
import { SortIndex } from "./SortIndex";
import { SortMethod } from "./SortMethod";
import { SortByProductRate } from "./SoryByProductRate";

export class SortFactory { 
    constructor() {
    }

    createSortMethod(prop: SortIndex): SortMethod {
        if (prop === SortIndex.PRODUCT) {
            return new SortByProductRate()
        } else if (prop === SortIndex.SELLER) {
            return new SortBySellerRate();
        } 
    }
}