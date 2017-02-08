import { Injectable } from '@angular/core';
import {WebService} from './web.service';

@Injectable()
export class DataService {

  public data: any;

  constructor(public webService: WebService) { 

  }

  getReq(url:string){
     this.webService.getReq(url).subscribe(
      response => {console.log(response);
         this.data = response.json()}, 
      error => console.error(error)
    );
  }

}
