import { Injectable } from '@angular/core';
import { loginRequest } from '../interfaces/login.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlBase = "http://localhost:3000";

  constructor(private http: HttpClient){}

  login(credential:loginRequest):Observable<loginRequest>{
    localStorage.setItem("user", credential.user) ;
    return this.http.get<loginRequest>(`${this.urlBase}/users`)
    }




}
