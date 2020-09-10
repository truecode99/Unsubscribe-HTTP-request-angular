import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }
  
  fetchData(apiUrl): any {
    return this.http
      .get(apiUrl, {
        responseType: "json",
      })
      .pipe(
        map((responseData) => {
          return responseData;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }
}
