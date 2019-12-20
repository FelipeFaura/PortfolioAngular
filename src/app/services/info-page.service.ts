import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interfaces/info-page';

@Injectable({
  providedIn: 'root'
})


export class InfoPageService {

  info: Info;
  charged = false;

  constructor(private http: HttpClient) {

    console.log('Test de servicio');
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: Info) => {
        this.charged = true;
        this.info = resp;
        console.log(this.info);

      });
  }
}
