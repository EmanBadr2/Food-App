import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor() {}
  private baseUrl: string = 'https://upskilling-egypt.com:3006/api/v1/';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('userToken') ;
    // Clone the request and add the base URL to the request URL
    const clonedRequest = req.clone({ url: `${this.baseUrl}${req.url}` ,
    setHeaders:{Authorization: `Bearer ${token}` } });

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }

}
