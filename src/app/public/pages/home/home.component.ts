import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 


  constructor(){
   
  }

  ngOnInit(): void {
    Aos.init();
    
  }



}
