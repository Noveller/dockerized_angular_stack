import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordRecoveryRoutingModule} from "./password-recovery-routing.module";
import { RecoveryPasswordComponent } from './components/base/recovery-password.component';

@NgModule({
    imports: [
        CommonModule,
        PasswordRecoveryRoutingModule
    ],
    declarations: [RecoveryPasswordComponent]
})
export class PasswordRecoveryModule {
}
