import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Dummy API

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPersonById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePerson(id: number, personData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, personData);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}