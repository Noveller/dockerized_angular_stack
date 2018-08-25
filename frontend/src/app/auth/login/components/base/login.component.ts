import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../../app-core/services/user.service";
import {AuthenticationService} from "../../../../app-core/services/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public submitted: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private user: UserService,
        private auth: AuthenticationService,
        private router: Router
    ) {

        this.form = this.formBuilder.group({
            email: [ '', [Validators.required, Validators.email]],
            password: [ '', Validators.required ]
        });
    }

    public get f() {
        return this.form.controls;
    }

    public submit() {

        this.submitted = true;

        console.log(this.form);

        if (!this.form.valid) {
           return;
        }

        this.login();
    }

    private login() {
        this.auth.login(this.form.value).subscribe(user => {

            if (user) {
                this.router.navigate(['/dashboard']);

                //Todo: redirect to any dashboard route

            }

        });
    }

    ngOnInit() {

    }

}
