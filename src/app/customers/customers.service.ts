import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Customers[]>('http://localhost:3000/customers');
  }
  create(payload: Customers) {
    return this.http.post<Customers>('http://localhost:3000/customers', payload);
  }
  getById(id: number) {
    return this.http.get<Customers>(`http://localhost:3000/customers/${id}`);
   }

   update(payload:Customers){
    return this.http.put(`http://localhost:3000/customers/${payload.id}`,payload);
   }

   delete(id:number){
    return this.http.delete<Customers>(`http://localhost:3000/customers/${id}`);
 }
}
