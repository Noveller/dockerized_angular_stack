import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './components/base/profile.component';
import {ProfileRoutingModule} from "./profile-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}
