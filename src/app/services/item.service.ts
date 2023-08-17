import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDTO } from '../Interfcae/ItemDTO';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'https://localhost:7110/api/Item';

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemDTO[]> {
    return this.http.get<ItemDTO[]>(`${this.baseUrl}`);
  }

  getItemById(srno: number): Observable<ItemDTO> {
    return this.http.get<ItemDTO>(`${this.baseUrl}/${srno}`);
  }

  addItem(item: ItemDTO): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}`, item);
  }

  updateItem(srno: number, item: ItemDTO): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${srno}`, item);
  }

  deleteItem(srno: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${srno}`);
  }
}
