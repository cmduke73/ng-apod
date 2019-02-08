import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from './apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  key:string = 'p4XNai6uNpYsJ3AKfZ3EQaLWW5rCAZfo5eRUX1zz';
  url:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}`;

  constructor(private http: HttpClient) {}

  getApod(date: string): Observable<Apod>{
    return this.http.get<Apod>(`${this.url}&date=${date}`);
  }
}
