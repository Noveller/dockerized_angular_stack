import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AppCoreModule} from "../app-core/app-core.module";
import {AuthenticationService} from "../app-core/services/authentication.service";
import {LayoutStore} from "angular-admin-lte";

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    providers: [],
    declarations: []
})
export class AuthModule {

    constructor(private layoutStore: LayoutStore) {}

}
