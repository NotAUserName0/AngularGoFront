import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, Subject, throwError } from 'rxjs';
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

  private handleError(error: HttpErrorResponse) {
    let errorString = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      errorString = "Network Error"
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        errorString = `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorString));
  }

  getPosts():Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}`).pipe(
      catchError(this.handleError)
    );
  }

  getUser(id:any):Observable<User>{
    return this.http.get<User>(`${this.URL}get/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  pushUser(usr:any):Observable<User>{
    return this.http.post<User>(`${this.URL}add`,usr,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  delUser(id:any):Observable<User>{
    return this.http.delete<User>(`${this.URL}delete/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  modUser(id:any,usr:any):Observable<User>{
    return this.http.put<User>(`${this.URL}put/${id}`,usr,this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }



}
