import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public infoService: InfoPageService, private router: Router) {

  }

  ngOnInit() {
  }


  public searchProduct(value: string) {
    if (value.length < 1) {
      return;
    }

    this.router.navigate(['/search', value]);
  }
}
