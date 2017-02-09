import { Component, OnInit } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { StatesComponent } from '../states.component';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name: any;
  state: string = '';
  constructor(public af: AngularFire,private router: Router) {
    this.router.navigateByUrl('home/states');
    // this.af.auth.subscribe(auth => {
    //   if(auth) {
    //     this.name = auth;
    //   }
    // });
   }
 logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
