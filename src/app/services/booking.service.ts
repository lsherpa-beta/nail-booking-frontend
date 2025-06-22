import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Booking {
  firstName: string;
  lastName: string;
  phoneNbr: number;
  email?: string;
  appointmentDate: string;  // format: 'YYYY-MM-DD'
  appointmentTime: string;  // format: 'HH:mm:ss'
}

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  private baseUrl = `${environment.apiUrl}/booking`;

  constructor(private http: HttpClient) { }

  createBooking(booking: Booking): Observable<any> {
    return this.http.post(this.baseUrl, booking);
  }



}
