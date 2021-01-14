import { Component, OnInit } from '@angular/core';
import { Sellers, Users, Products } from 'src/Data/FakeData';
import Product from 'src/Model/Product';
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
  localProducts: Product[];
  localProductsIds = [];
  ;

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.user))
    this.getLocalSellers();
    this.getLocalProducts();
  }

  getLocalSellers() {
    let userLocation = this.user.location;
    //to remove prototype properties from s so it can be casted as Seller
    let s = Object.create(null);
    s = this.allSellers.filter(seller =>
      seller.location == userLocation
    );
    this.localSellers = [...s];
    console.log(JSON.stringify(this.localSellers));
  }

  getLocalProducts() {
    this.getLocalProductsIds();
    //to remove prototype properties from p so it can be casted as Product
    let p = Object.create(null);
    p = this.allProducts.filter(product =>
      this.localProductsIds.includes(product.id)
    );
    this.localProducts = [...p];
    console.log(JSON.stringify(this.localProducts));
  }

  getLocalProductsIds() {
    this.localSellers.map(seller => {
      this.localProductsIds.push(...seller.catalog);
    });
    console.log(JSON.stringify(this.localProducts));
  }
}
