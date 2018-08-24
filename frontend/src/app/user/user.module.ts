import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {UserRoutingModule} from "./user-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AppCoreModule} from "../app-core/app-core.module";
import {AuthenticationService} from "../app-core/services/authentication.service";

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    providers: [],
    declarations: []
})
export class LoginModule {
}
