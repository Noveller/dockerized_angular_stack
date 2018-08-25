import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../app-core/guards/auth-guard";

@NgModule({
    imports: [
        RouterModule.forChild([
            // {
            //     path: '',
            //     redirectTo: 'profile',
            //     pathMatch: 'full'
            // },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
                data: {
                    title: 'Users'
                },
                canActivate: [AuthGuard]
            },
        ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
