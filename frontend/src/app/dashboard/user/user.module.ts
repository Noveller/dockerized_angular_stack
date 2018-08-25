import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from "./user-routing.module";
import { CreateUserComponent } from './create-user/create-user.component';
import {LayoutStore} from "angular-admin-lte";
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [CreateUserComponent, UserListComponent]
})
export class UserModule {
    constructor(private layoutStore: LayoutStore) {

        this.layoutStore.setSidebarLeftMenu([
            // {label: 'MAIN NAVIGATION', separator: true},
            {label: 'Create user', 'route': '/dashboard/user/create', iconClasses: 'fa fa-th-list'},
            {label: 'User list', 'route': '/dashboard/user/list', iconClasses: 'fa fa-th-list'},

        ]);


        const data = [
            {
                label: 'Get Started',
                route: '/',
                iconClasses: 'fa fa-road',
                pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]
            },
            {
                label: 'Layout', iconClasses: 'fa fa-th-list', children: [
                    {label: 'Configuration', route: 'layout/configuration'},
                    {label: 'Custom', route: 'layout/custom'},
                    {label: 'Header', route: 'layout/header'},
                    {label: 'Sidebar Left', route: 'layout/sidebar-left'},
                    {label: 'Sidebar Right', route: 'layout/sidebar-right'},
                    {label: 'Content', route: 'layout/content'}
                ]
            },
            {label: 'COMPONENTS', separator: true},
            {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
            {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
            {
                label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
                    {label: 'Default Box', route: 'boxs/box'},
                    {label: 'Info Box', route: 'boxs/info-box'},
                    {label: 'Small Box', route: 'boxs/small-box'}
                ]
            },
            {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
            {
                label: 'Form', iconClasses: 'fa fa-files-o', children: [
                    {label: 'Input Text', route: 'form/input-text'}
                ]
            },
            {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
        ]

    }
}
