import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecoveryPasswordComponent} from "./components/base/recovery-password.component";

const routes: Routes = [
    {
        path: '',
        component: RecoveryPasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasswordRecoveryRoutingModule {
}
