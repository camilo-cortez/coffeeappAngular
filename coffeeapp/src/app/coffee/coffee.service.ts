import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from './coffee';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Coffee[]>{
    return this.http.get<Coffee[]>(this.apiUrl);
  }

}
