import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }
getClients(): Observable<any>{
  return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/clients`)
}
postClients(data: any): Observable<any> {
  return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/clients`,data);
} 
getClient(clientId : number):Observable<any>{
  return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/clients/${clientId}`);
}
getClientsByHotel(hotelId: number):Observable<any> {
  return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/clients/${hotelId}`);
}
deleteClient(hotelId: number):Observable<any>  {
  return  this.httpClient.delete<any[]>(`${environment.apiUrl}/${environment.prefix}/clients/${hotelId}`);
}
getHotelById(id: number): Observable<any> {
      return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/hotels/${id}`);
    }
    
getHotels(): Observable<any[]> {
  return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/dali`);
}
updateClient(id : number,data: any): Observable<any[]> {
  const {clientFirstName, clientLastName, clientPhone, hotel } = data;
 
  
  return this.httpClient.put<any[]>(`${environment.apiUrl}/${environment.prefix}/clients/${id}`,{ clientFirstName, "clientLastName": clientLastName,"clientPhone" : clientPhone, "HotelId": hotel.id });
}

}
