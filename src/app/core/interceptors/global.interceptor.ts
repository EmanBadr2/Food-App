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

  private baseUrl: string = 'https://upskilling-egypt.com:3006';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and add the base URL to the request URL
    const clonedRequest = req.clone({ url: `${this.baseUrl}${req.url}` });


    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }

}
