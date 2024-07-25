import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatsData } from '../interfaces/cat.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  constructor(private http: HttpClient) {}

  getCatImagesWithBreedData(): Observable<CatsData[]> {
    const headers = new HttpHeaders({
      'x-api-key': environment.apiUrl,
    });

    const params = new HttpParams().set('limit', '10').set('has_breeds', '1');

    return this.http.get<CatsData[]>(environment.apiUrl, {
      headers,
      params,
    });
  }
}
