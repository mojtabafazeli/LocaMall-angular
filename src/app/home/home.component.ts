import { Component, OnInit } from '@angular/core';
import { Sellers, Users, Products } from 'src/Data/FakeData';
import Card from 'src/Model/Card';
import Seller from 'src/Model/Seller';


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
    this.sortList(this.localProductsCards, "productRate", 0, this.localProductsCards.length - 1);
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
    // //using the Array find() method to find a product by Id
    //  return this.allProducts.find(product => 
    //     product.id = id
    //   );
  }

  //implementing sorting algorithm
  sortList(arr, prop: string, low: number, high: number) {
    if (low < high) {
      let pi = this.partition(arr, prop, low, high);
      this.sortList(arr, prop, low, pi - 1);
      this.sortList(arr, prop, pi + 1, high);
    }
  }

  //this is a method to find a pivot which will be used in sortList function
  partition(arr: any, prop: string, low: number, high: number): number {
    let pivot: number = arr[high][prop];
    let i = (low - 1);
    for (let j = low; j < high; j++) {
      if (arr[j][prop] > pivot) {
        i++;
        //swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    //swap arr[i+1] and arr[high] (or pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
  }
}
