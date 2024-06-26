import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://backend.starvingdevelopers.tech';

  constructor(private http: HttpClient) { }

  // Método GET
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dados`);
  }

  // Método POST
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.apiUrl}/auth/authenticate`, data, { headers }).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);

    return throwError(() => new Error('Algo deu errado; tente novamente depois'));
  }
}
