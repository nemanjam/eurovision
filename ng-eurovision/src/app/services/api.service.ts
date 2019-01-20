import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(
    private http: HttpClient
  ) {}

  /**
   * Compose GET request
   * @param path api endpoint
   * @param params query params
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  /**
   * Compose put request
   * @param path api endpoint
   * @param body request body
   */
  put(path: string, body: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body), httpOptions)
     .pipe(catchError(this.formatErrors));
  }

  /**
   * Compose DELETE request
   * @param path api endpoint
   */
  delete(path): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * Error handler
   * @param error err
   */
  private formatErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something went wrong.');
  }
}
