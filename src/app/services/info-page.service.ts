import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interfaces/info-page';
import { TeamMember } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})


export class InfoPageService {

  info: Info;
  charged = false;
  teamMember: TeamMember[];

  constructor(private http: HttpClient) {
    this.getInfo();
    //this.getTeam();

  }

  private getInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: Info) => {
        this.charged = true;
        this.info = resp;
        console.log(this.info);
        console.log(this.info.titulo);
      });
  }

  private getTeam() {
    this.http.get('https://portfolio-55393.firebaseio.com/equipo/0.json')
      .subscribe((resp: any[]) => {
        this.charged = true;
        this.teamMember = resp;
        console.log(this.teamMember);
      });
  }
}
