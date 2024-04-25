import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { offset } from '@popperjs/core';
import { INavbarData, fadeInOut } from 'src/app/core/interface/helper';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
  animations: [
    // trigger('fadeInOut',[
    //   transition(':enter',[
    //     style({opacity: 0}),
    //     animate('350ms',
    //       style({opacity: 1})
    //     )
    //   ]),
    //   transition(':leave',[
    //     style({opacity: 1}),
    //     animate('350ms',
    //       style({opacity: 0})
    //     )
    //   ])
    // ]),
    fadeInOut,
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class MenuAdminComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  public collapsed : boolean = false;
  public screenWidth: number = 0;
  public navData = navbarData;
  public multiple: boolean = false;

  constructor(){

  }

  ngOnInit(): void {
   this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if( this.screenWidth <= 768 ){
        this.collapsed = false
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  handleClick(item:INavbarData): void {
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }

  
}
