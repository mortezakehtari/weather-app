
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


import { ActivatedRoute, Router } from '@angular/router';
import { environment } from "../../environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const storedUser = localStorage.getItem('userData');

    if (!storedUser) {
      this.navigateToLogin();
    }

    //append wather apikey to the requests
    request = request.clone({
      params: request.params
        .append('apikey', environment.WEATHER_API_KEY)
    });

    return next.handle(request);

  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
