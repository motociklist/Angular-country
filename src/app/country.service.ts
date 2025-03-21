import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  id?: string;
  name: string;
  capital: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'http://localhost:3000/countries';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  getCountry(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }

  createCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, country);
  }

  updateCountry(id: string, country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${id}`, country);
  }

  deleteCountry(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}