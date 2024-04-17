import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-public',
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.scss']
})
export class MenuPublicComponent implements OnInit{
  
  public menuList: any;

  constructor(){

  }

  ngOnInit(): void {
    this.menuList = document.getElementById("menuList");
    this.menuList.style.maxHeight = "0px";    
  }

  toggleMenu(){
    if(this.menuList.style.maxHeight == "0px")
      {
          this.menuList.style.maxHeight = "300px";
      }
      else{
          this.menuList.style.maxHeight = "0px";
      }
  }
}
