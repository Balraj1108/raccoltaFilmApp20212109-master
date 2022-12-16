import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userLoggedSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  login(loginForm: User): Observable<User>{
    //setta l'utente loggato
    this.setUserLogged(loginForm);
    return of({username: loginForm.username, token: "45"});
    //return this.http.post<User>("login", JSON.stringify(loginForm))

  }

  setUserLogged(user: User | null){
    this.userLoggedSubject$.next(user);
  }

  getUserLogged(): Observable<User | null>{
    return this.userLoggedSubject$.asObservable();
  }

  isLoggedIn(): boolean{
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false;
  }

  getUserToke(): string | null {
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null;
  }

  logout(){
    this.setUserLogged(null);
  }

}
