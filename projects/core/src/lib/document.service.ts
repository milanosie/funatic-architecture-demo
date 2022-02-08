import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) {
    }

    getDocuments(): Observable<any> {
        return this.http.get('https://620125acfdf5090017249893.mockapi.io/documents');
    }
}
