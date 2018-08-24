import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NgxPermissionsGuard} from "ngx-permissions";
import {AuthGuard} from "../app-core/guards/auth-guard";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule',
                canActivate: [AuthGuard]
            }
        ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
