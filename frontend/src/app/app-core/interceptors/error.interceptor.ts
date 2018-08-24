import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../services/authentication.service";
import {Observable, throwError} from "rxjs/index";
import {catchError} from "rxjs/internal/operators";
import {NotifierService} from "angular-notifier";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private notifier: NotifierService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(response => {
/*            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }*/

            if (response.status === 400) {
                this.notifier.notify( 'error', response.error.error );
            }

            const error = response.error.message || response.statusText;
            return throwError(error);
        }))
    }
}