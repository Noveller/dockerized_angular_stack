import { Component, OnInit } from '@angular/core';
import {LayoutStore} from "angular-admin-lte";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private layout: LayoutStore) {
    this.layout.setSidebarLeftMenu([])
  }

  ngOnInit() {
  }

}
