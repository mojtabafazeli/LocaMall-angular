import { Component, OnInit } from '@angular/core';
import { Sellers, Users, Products } from 'src/Data/FakeData';
import Card from 'src/Model/Card';
import Seller from 'src/Model/Seller';
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
  localProductsCards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createLocalProductsCards();
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
        this.localProductsCards.push({ sellerFirstName, productName, productImage, productRate })
      }
    }
    console.log(JSON.stringify(this.localProductsCards))
    let sf = new SortFactory(SortIndex.PRODUCT);
    let sortMethod = sf.createSortMethod();
    sortMethod.sortList(this.localProductsCards);
    console.log(JSON.stringify(this.localProductsCards))
  }

  getLocalSellers() {
    let userLocation = this.user.location;
    //to remove prototype properties from s so it can be casted as Seller
    let s = Object.create(null);
    s = this.allSellers.filter(seller =>
      seller.location == userLocation
    );
    this.localSellers = [...s];
  }

  // implementing Linear Search algorithm 
  findProductByIdInAllProducts(id: string) {
    let products = this.allProducts;
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      if (product.id == id) return product;
    }
  }
  
}
