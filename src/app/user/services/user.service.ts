import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = "http://localhost:3000/"; //page

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPosts():Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}`);
  }

  pushUser(usr:any):Observable<User>{
    return this.http.post<User>(`${this.URL}add`,usr,this.httpOptions);
  }

}
