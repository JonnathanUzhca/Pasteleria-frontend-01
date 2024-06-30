import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { Menu, NavService } from 'src/app/services/nav.service';
import { SwitcherService } from 'src/app/services/switcher.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  public menuItems!: Menu[];
  public items!: Menu[];
  public text!: string;
  public SearchResultEmpty: boolean = false;
    

  constructor(
    private layoutService: LayoutService,
    public SwitcherService: SwitcherService,
    public navServices: NavService,

    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
  }

  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
  }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }
}
