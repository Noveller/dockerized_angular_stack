import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "../profile/components/base/profile.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes = [
    {
        path: 'create',
        component: CreateUserComponent,
    },
    {
        path: 'list',
        component: UserListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
