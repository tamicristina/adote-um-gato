import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  constructor(private http: HttpClient) {}

  getCats() {
    // TODO: add observable and request;
  }
}
