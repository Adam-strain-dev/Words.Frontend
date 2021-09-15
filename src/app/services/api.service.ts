import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _apiUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  SolveAnagrams = (searchString: string): Observable<string[]> => this.http.get<string[]>(`${this._apiUrl}/getAnagrams/${searchString}`);
}
