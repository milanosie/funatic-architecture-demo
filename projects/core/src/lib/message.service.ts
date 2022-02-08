import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
  }

  getMessages(): Observable<any> {
    return this.http.get('https://620125acfdf5090017249893.mockapi.io/messages');
  }

  getMessage(id: number): Observable<any> {
    return this.http.get('https://620125acfdf5090017249893.mockapi.io/messages/' + id);
  }
}
