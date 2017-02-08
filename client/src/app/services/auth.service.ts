import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isAuth(){
    return false;
  }

}
