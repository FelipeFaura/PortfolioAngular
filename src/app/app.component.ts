import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private infoPage: InfoPageService, public productService: ProductsService) {

  }

}
