import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  scrolled: boolean = false;
  
  @HostListener("window:scroll", [])
  onWindowScroll() {    
    this.scrolled = window.scrollY > 70;
  }

}
