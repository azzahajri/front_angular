import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient: HttpClient) { }
getListHotels(): Observable<any> {
  return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/dali`)
}
postHotels(data: any): Observable<any> {
  return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/hotels`,data);
}
updateHotel(data: any): Observable<any> {
  console.log(data);
  
  return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/hotels/${data.id}`,{"hotelName":data.hotelName});
}
getOneHotel(id : number):Observable<any>{
  return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/hotels/${id}`)
}
}
