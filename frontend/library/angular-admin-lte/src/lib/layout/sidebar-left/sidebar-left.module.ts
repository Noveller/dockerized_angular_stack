import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AnimationsModule } from '../../animations/animations.module';

import { SidebarLeftToggleDirective } from './sidebar-left.directive';
import { SidebarLeftComponent } from './sidebar-left.component';
import {NgxPermissionsModule} from "ngx-permissions";

@NgModule({
    imports: [CommonModule, RouterModule, AnimationsModule, NgxPermissionsModule],
    exports: [SidebarLeftComponent],
    declarations: [SidebarLeftToggleDirective, SidebarLeftComponent]
})
export class SidebarLeftModule {}
