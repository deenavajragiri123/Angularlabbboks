import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUser } from '../models/AppUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById = (userId: number): Observable<AppUser> => {
    console.log('getUsersById');
    return this.http.get<AppUser>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

}