import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authUrl;
  token: string;
  userId: string;
  isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
  ) {
      this.initAuth();
   }

  initAuth() {
    if (typeof localStorage !== "undefined") {
      // retourne auth ou une valeur null
      const data = JSON.parse(localStorage.getItem('auth') || '{}');

      //Si on est sur que la valeur retourner ne peut pas être null
     /* const data = JSON.parse(localStorage.getItem('auth')!);*/

      if (data.userId && data.token) {
        this.userId = data.userId;
        this.token = data.token;
        this.isAuth$.next(true);
      }
    }
  }

  signup(email: string, password:string) {
    return new Promise((resolve, reject)=>{
      this.http.post(this.authURL+'/users/signup', {email:email, password:password})
      .subscribe(
        (signupData:any /*{status : number; message: string}*/): void=>{
          if (signupData.status === 201) {
            this.signin(email, password)
            .then(()=>{
              resolve(true);
            })
            .catch((err)=>{
              reject(err);
            });;
          } else {
            reject(signupData.message)
          }

        },
        (err)=>{
          reject(err)
        }
      )
    })
  }

  signin(email: string, password:string) {
    return new Promise((resolve, reject)=>{
      this.http.post(this.authURL+'/users/signin', {email:email, password:password})
      .subscribe(
        (authData:any /*{token:string; userId: string}*/)=>{
          this.token = authData.token;
          this.userId = authData.token;
          this.isAuth$.next(true);
          // save authData in local
          if(typeof localStorage !== "undefined") {
            localStorage.setItem('auth',
                                JSON.stringify(authData));
          }

          resolve(true);
        },
        (err)=>{
          reject(err)
        }
      )
    })
  }

  logout() {
    this.isAuth$.next(false);
    this.userId = ' ';
    this.token = ' ';
    if (typeof localStorage !== "undefined") {
      localStorage.setItem('auth', ' ')
    }
  }

}
