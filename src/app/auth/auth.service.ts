import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  //private uri = 'http://localhost:3000/api/user/';
  // private uri = 'https://angular-node-app-heroku.herokuapp.com/api/user/';
  private uri = 'api/user/';


  constructor(private http: HttpClient, private router: Router) {}

  public createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post(this.uri + 'signup', authData)
    .subscribe(response => {
      console.log('response from server: ' + response);
      // Object.keys(response).forEach(e => console.log(`key=${e}  value=${response[e]}`));
      // Object.keys(response['result']).forEach(e => console.log(`key=${e}  value=${response['result'][e]}`));
      // Object.keys(response['result']['password']).forEach(e => console.log(`key=${e}  value=${response['result']['password'][e]}`));
      console.log('response from server: ' + response['result']['password']);
      // console.log('response from server: ' + response['clients'].id);

      if (typeof response != undefined) {
        localStorage.setItem('ACCESS_TOKEN', response['result']['password']);
        this.router.navigate(['/']);
        console.log('Creation 0k');
        return 'Ok';
      } else  {
        localStorage.removeItem('ACCESS_TOKEN');
        return 'Creation failed';
      }
    });
  }

  public login(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post(this.uri + 'login', authData)
    .subscribe(response => {
      console.log('response from server: ' + response);
      if (typeof response != undefined) {
        localStorage.setItem('ACCESS_TOKEN', response['token']);
        this.router.navigate(['/']);
        console.log('Login ok');
        return 'Ok';
      } else  {
        localStorage.removeItem('ACCESS_TOKEN');
        return 'Auth failed';
      }
    });
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigate(['/']);
  }
}
