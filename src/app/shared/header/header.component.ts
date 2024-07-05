import { AfterViewInit, Component, ElementRef, HostBinding, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { Menu, NavService } from 'src/app/services/nav.service';
import { SwitcherService } from 'src/app/services/switcher.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  public isCollapsed = true;
  public menuItems!: Menu[];
  public text!: string;
  public SearchResultEmpty: boolean = false;
  slides = [
    { text: 'Artículo 1', price: 19.99, image: 'assets/img/ejemplo/1.png' },
    { text: 'Artículo 2', price: 29.99, image: 'assets/img/ejemplo/2.png' },
    { text: 'Artículo 3', price: 39.99, image: 'assets/img/ejemplo/3.png' },
    // Agrega más artículos según sea necesario
  ];

  currentSlideIndex = 0;
  slideInterval: any;
  backgroundColors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffccff', '#ffffcc'];
  currentBackgroundColor = this.backgroundColors[0];

  constructor(
    private layoutService: LayoutService,
    public SwitcherService: SwitcherService,
    public navServices: NavService,
    private renderer: Renderer2,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  startSlider(): void {
    this.slideInterval = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      this.currentBackgroundColor = this.backgroundColors[this.currentSlideIndex];
    }, 5000);
  }

  ngAfterViewInit(): void {
    
  }


  toggleSwitcher() {
    this.SwitcherService.emitChange(true);
  }

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }


}
