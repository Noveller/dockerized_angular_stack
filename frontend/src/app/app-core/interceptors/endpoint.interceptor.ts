import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../../../environments/environment";

export class EndpointInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            url: `${environment.endpoint}${request.url}`
        });

        return next.handle(request);
    }

}