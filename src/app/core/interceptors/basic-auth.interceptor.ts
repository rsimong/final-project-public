import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@core/authentication/authentication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // add authorization header with basic auth credentials if available
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${authToken}`,
                }
            });
        }
        return next.handle(request);
    }
}
