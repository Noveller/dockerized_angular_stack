import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "./services/user.service";
import {AuthenticationService} from "./services/authentication.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EndpointInterceptor} from "./interceptors/endpoint.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {AuthGuard} from "./guards/auth-guard";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: EndpointInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    exports: [
        HttpClientModule
    ]
})
export class AppCoreModule {

    public constructor(@Optional() @SkipSelf() parentModule: AppCoreModule) {
        if (parentModule) {
            throw new Error(
                'AppCoreModule is already loaded. Import it in the AppModule only');
        }
    }

    public static forRoot() {
        return {
            ngModule: AppCoreModule,
            providers: [
                UserService,
                AuthenticationService,
                AuthGuard
            ],
        }
    }
}
