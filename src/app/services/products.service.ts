import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isCharging = true;
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();

  }

  private getProducts() {
    this.http.get('https://portfolio-55393.firebaseio.com/productos_idx.json').subscribe((resp: Product[]) => {
      this.products = resp;

      setTimeout(() => {
        this.isCharging = false;
      }, 1000);
    });
  }
}
