import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';
import { DataService } from './services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cities',
  template: `
  <div>
  <h2>Cities</h2>
      <div *ngFor="let city of cities">
     <a [routerLink]="['../../items', city.city]">{{city.city}}</a>
    </div>
    </div>
  `,
  styles: []
})
export class CitiesComponent implements OnInit {

  url: string;
  postData: any;
  cities: any[];
  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url[0] + "/" + this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.webService.getReq(this.url).subscribe(
      response => {
        this.cities = response.json()
      },
      error => console.error(error)
    );
  }
}
