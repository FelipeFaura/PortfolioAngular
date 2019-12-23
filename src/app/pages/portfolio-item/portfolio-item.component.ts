import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductInfo } from 'src/app/interfaces/productInfo';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  productInfo: ProductInfo = {};
  productID: string;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {

  }

  ngOnInit() {

    this.route.params
      .subscribe(parameter => {
        console.log(parameter);
        this.productsService.getInfoProducts(parameter['id']).subscribe((product: ProductInfo) => {
          this.productInfo = product;
          this.productID = parameter['id'];
        });
      });

  }


}
