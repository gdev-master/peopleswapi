import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '../models/person.model'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}


  getPeople(): Observable<data.IData>{
    return this.http.get<data.IData>('https://swapi.dev/api/people/');
  }

  getPeopleByPages(count: number): Observable<data.IData> {
    return this.http.get<data.IData>('https://swapi.dev/api/people/?page=' + count  );
  }

}
