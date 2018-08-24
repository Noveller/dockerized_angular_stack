import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, map} from "rxjs/internal/operators";
import {NgxPermissionsService} from "ngx-permissions";

@Injectable()
export class AuthenticationService {

    private ls: any = { token: 'token' };

    constructor(private http: HttpClient, private permissions: NgxPermissionsService) {}

    public get token() {
        return localStorage.getItem(this.ls.token);
    }

    public set token(token: string) {
        localStorage.setItem(this.ls.token, token);
    }

    public tokenExists(): boolean {
        return Boolean(this.token);
    }

    public login(body: { email: string, password: string }) {
        return this.http.post('/api/login', body)
            .pipe(first())
            .pipe(map((user: {token: string}) => {

                if (user && user.token ) {
                    this.token = user.token;
                }

                return user;

            }))
    }

    public logout(): void {
        localStorage.removeItem(this.ls.token);
    }
}
