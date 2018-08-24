import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterRoutingModule} from "./register-routing.module";
import {RegisterComponent} from "./components/base/register.component";


@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {

}
