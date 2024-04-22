import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-contador',
  templateUrl: './seccion-contador.component.html',
  styleUrls: ['./seccion-contador.component.scss']
})
export class SeccionContadorComponent implements OnInit{

  public cont1:number = 0;
  public cont2:number = 0;
  public cont3:number = 0;
  public cont4:number = 0;
  
  constructor(){

  }

  ngOnInit(): void {
    console.log(this.setContenc())
    
  }

  setContenc(){
    let cant1=0, cant2=0, cant3=0, cant4=0, tiem=25;

    let timer1 = setInterval(() => {
      this.cont1 = cant1+=1;
      if(cant1 === 170){
        clearInterval(timer1)
      }
    }, 20);

    let timer2 = setInterval(() => {
      this.cont2 = cant2+=1;
      if(cant2 === 2420){
        clearInterval(timer2)
      }
    }, 20);

    let timer3 = setInterval(() => {
      this.cont3 = cant3+=1;
      if(cant3 === 420){
        clearInterval(timer3)
      }
    }, 20);

    let timer4 = setInterval(() => {
      this.cont4 = cant4+=1;
      if(cant4 === 1617){
        clearInterval(timer4)
      }
    }, 20);
  }
}
