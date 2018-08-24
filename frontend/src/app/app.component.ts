import {Component, OnInit} from '@angular/core';
import {LayoutService} from 'angular-admin-lte';
import {NgxPermissionsService} from "ngx-permissions";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public customLayout: boolean;

    constructor(private layoutService: LayoutService, private permissions: NgxPermissionsService) {

        const permit = ['admin', 'editor'];

        this.permissions.loadPermissions(permit);

    }

    ngOnInit() {
        this.layoutService.isCustomLayout.subscribe((value: boolean) => {
            this.customLayout = value;
        });
    }
}
