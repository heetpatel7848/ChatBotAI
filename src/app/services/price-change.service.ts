import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceChangeDTO } from '../Interfcae/PriceChangeDTO ';

@Injectable({
  providedIn: 'root'
})
export class PriceChangeService {

  private baseUrl = 'https://localhost:7110/api/PriceChange';

  constructor(private http: HttpClient) { }

  getPriceChanges(): Observable<PriceChangeDTO[]> {
    return this.http.get<PriceChangeDTO[]>(this.baseUrl);
  }

  addPriceChange(priceChange: PriceChangeDTO): Observable<void> {
    return this.http.post<void>(this.baseUrl, priceChange);
  }


  updateItems(srno: number, updateData: any): Observable<any> {
    const url = `${this.baseUrl}/${srno}`;
    return this.http.put(url, updateData);
  }
}
