import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public isSideNavCollapsed : boolean = false;
  public screenWidth = 0;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onToggleSideNav(data:SideNavToggle){
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
