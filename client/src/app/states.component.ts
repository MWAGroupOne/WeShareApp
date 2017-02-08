import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';
import { DataService } from './services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-states',
  template: `
  <div>
  <h2>States</h2>
    <div *ngFor="let state of statesx">
     <a [routerLink]="['/home','cities', state.state]">{{state.state}}</a>
    </div>
    </div>
  `,
  styles: []
})
export class StatesComponent implements OnInit {

  statesx: any[];
  postData:any;
  url: string;

  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url.join('');
   }

  ngOnInit() {
    this.webService.getReq(this.url).subscribe(
      response => {
        this.statesx = response.json();
         console.log("==========xxx==========x"+JSON.stringify(this.statesx));
      },
      error => console.error(error)
    );
  }

}


[{"_id":"01001","city":"AGAWAM","loc":[-72.622739,42.070206],"pop":15338,"state":"MA"},{"_id":"57552","city":"OTTUMWA","loc":[-101.292442,44.237443],"pop":789,"state":"SD"},{"_id":"50001","city":"ACKWORTH","loc":[-93.376719,41.37372],"pop":491,"state":"IA"},
{"_id":"589b4583132a1162670e1169","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e116a","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e116c","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e116b","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e0f5c","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1171","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1170","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1176","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1175","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e117b","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e117a","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1180","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e116e","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e117f","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1173","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1185","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"},{"_id":"589b4583132a1162670e1184","name":"Phone","description":"Just for just","details":"test data","contacts":{"email":"bxd","phone":"64383938489"},"category":"offered","location":{"state":"IA","city":"Ottumwa","geo":{"lon":"32.32","lat":0.33484}},"image":"","status":"available"}]