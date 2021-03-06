import { Component, OnInit } from '@angular/core';
import { Sellers, Users, Products } from 'src/Data/FakeData';
import ProductCard from 'src/Model/ProductCard';
import Seller from 'src/Model/Seller';
import SellerCard from 'src/Model/SellerCard';
import { SortFactory } from '../Algorithms/SortFactory';
import { SortIndex } from '../Algorithms/SortIndex';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = Users[0];
  allSellers = Sellers;
  allProducts = Products;
  localSellers: Seller[];
  localProductsCards: ProductCard[] = [];
  popularSellersCards: SellerCard[] = [];
  sf = new SortFactory();

  constructor() { }

  ngOnInit(): void {
    this.createLocalProductsCards();
    this.createPopularSellersCards();
  }

  createLocalProductsCards() {
    this.getLocalSellers();
    for (let seller of this.localSellers) {
      let sellerFirstName = seller.firstName
      for (let prod of seller.catalog) {
        let product = this.findProductByIdInAllProducts(prod);
        let productName = product.name;
        let productImage = product.image;
        let productRate = product.rate;
        this.localProductsCards.push({ productName, sellerFirstName, productImage, productRate })
      }
    }
    console.table(this.localProductsCards);
    let sortMethod = this.sf.createSortMethod(SortIndex.PRODUCT);
    sortMethod.sortList(this.localProductsCards);
    console.table(this.localProductsCards);
  }

  getLocalSellers() {
    let userLocation = this.user.location;
    //to remove prototype properties from s so it can be casted as Seller
    let s = Object.create(null);
    s = this.allSellers.filter(seller =>
      seller.location == userLocation
    );
    this.localSellers = [...s];
    console.table(this.localSellers);
    console.table(this.allSellers[0].catalog);
    console.table(this.allProducts);
  }

  // implementing Linear Search algorithm 
  findProductByIdInAllProducts(id: string) {
    let products = this.allProducts;
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      if (product.id == id) return product;
    }
  }


  createPopularSellersCards() {
    for (let seller of this.allSellers) {
      let sellerFirstName = seller.firstName;
      let sellerImage = seller.image;
      let rate = seller.rate;
      this.popularSellersCards.push({ sellerFirstName, sellerImage, rate });
    }
    console.table(this.popularSellersCards);
    let sortMethod = this.sf.createSortMethod(SortIndex.SELLER);
    console.log(JSON.stringify(sortMethod));
    sortMethod.sortList(this.popularSellersCards);
    //get the first six popular sellers
    if (this.popularSellersCards.length > 6) {
      this.popularSellersCards.length = 6;
    }
    console.table(this.popularSellersCards);
  }

}
