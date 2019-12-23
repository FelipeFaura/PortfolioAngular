import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { ProductInfo } from '../interfaces/productInfo';
import { timingSafeEqual } from 'crypto';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isCharging = true;
  products: Product[] = [];
  productsInfo: ProductInfo = {};
  filterdProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();

  }

  private getProducts() {

    return new Promise((resolve, reject) => {


      this.http.get('https://portfolio-55393.firebaseio.com/productos_idx.json').subscribe((resp: Product[]) => {
        this.products = resp;

        setTimeout(() => {
          this.isCharging = false;
        }, 1000);
        resolve();
      });

    });
  }

  public getInfoProducts(id: string) {
    return this.http.get(`https://portfolio-55393.firebaseio.com/productos/${id}.json`);

  }

  public searchProduct(searchTerm: string) {
    if (this.products.length === 0) {
      // Cargaremos todos los productos.
      this.getProducts().then(() => {
        // codigo que se ejecutará despues de tener los productos.

        //this.filterProducts(searchTerm);
      });
    } else {
      // Aplicaremos el filtro.
      this.filterProducts(searchTerm);
    }


  }

  private filterProducts(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    this.filterdProducts = [];
    this.products.forEach(prod => {
      const tituloLower = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf(searchTerm) >= 0 || tituloLower.indexOf(searchTerm) >= 0) {
        this.filterdProducts.push(prod);
      }
    });

    console.log(this.filterdProducts);
  }
}
