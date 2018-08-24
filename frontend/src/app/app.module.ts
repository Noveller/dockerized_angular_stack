import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {adminLteConf} from './admin-lte.conf';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

import {LayoutModule} from 'angular-admin-lte';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {LoadingPageModule, MaterialBarModule} from 'angular-loading-page';
import {AppCoreModule} from "./app-core/app-core.module";
import {NotifierModule, NotifierOptions} from "angular-notifier";
import {NgxPermissionsModule} from "ngx-permissions";


const notifierDefaultOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'middle',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 4000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 500,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        AppCoreModule.forRoot(),
        LayoutModule.forRoot(adminLteConf),
        NgxPermissionsModule.forRoot(),
        LoadingPageModule, MaterialBarModule,
        NotifierModule.withConfig(notifierDefaultOptions)
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {

    }
}
