import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

const cabecera = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista', cabecera);
  }
}
