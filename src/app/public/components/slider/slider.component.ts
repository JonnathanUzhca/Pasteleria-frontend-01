import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
    
  }

  
  ngAfterViewInit(): void {
    const elemetosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemetosCarousel, {
        duration: 25,
        dist:-80,
        shift:5,
        padding: 5 ,
        numVisible :5,
        indicators: true,
        noWrap: false

    })
    
  }

}
