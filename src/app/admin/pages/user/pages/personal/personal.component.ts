import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ){

  }

  ngOnInit(): void {
    
  }
  

  BasicOpen(basicmodal:any) {
    this.modalService.open(basicmodal);
  }
}
