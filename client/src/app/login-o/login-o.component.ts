import { Component, OnInit,HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
@Component({
  selector: 'app-login-o',
  templateUrl: './login-o.component.html',
  styleUrls: ['./login-o.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginOComponent implements OnInit {

  error: any;
    constructor(public af: AngularFire,private router: Router) {

      this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/home']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  ngOnInit() {
  }

}
