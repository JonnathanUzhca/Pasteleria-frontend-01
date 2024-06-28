import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface ShopType {
  id?: number;
 
  title: string;
  oldValue: string;
  newValue: string;
  
}

const ShopData: ShopType[] = [
  {id: 1, title:"Cono Simple", oldValue: '$49.00', newValue: '$39.00'},
  {id: 2, title:"Cono con Crema", oldValue: '$30.00', newValue: '$21.00'},
  {id: 3, title:"Cono Doble", oldValue: '$29.00', newValue: '$15.00'},
  {id: 4, title:"Vaso Simple", oldValue: '$32.00', newValue: '$22.00'},
  {id: 5, title:"Vaso con Crema", oldValue: '$30.00', newValue: '$21.00'},
  {id: 6, title:"Vaso Doble", oldValue: '$29.00', newValue: '$15.00'},
  {id: 7, title:"Tulipan con Crema", oldValue: '$200.00', newValue: '$149.00'},
  {id: 8, title:"Tulipan Doble", oldValue: '$49.00', newValue: '$39.00'},
  {id: 9, title:"1L de Helado", oldValue: '$49.00', newValue: '$39.00'},
  {id: 10, title:"1/2L de Helado", oldValue: '$30.00', newValue: '$21.00'},
  {id: 11, title:"Barquillo", oldValue: '$29.00', newValue: '$15.00'},
  {id: 12, title:"Copa Dulce Amor", oldValue: '$32.00', newValue: '$22.00' },
  {id: 13, title:"Copa Gusano", oldValue: '$30.00', newValue: '$21.00'},
  {id: 14, title:"Copa Pinocho", oldValue: '$29.00', newValue: '$15.00'},
  {id: 15, title:"Copa Loca", oldValue: '$32.00', newValue: '$22.00' },
  {id: 16, title:"Copa Raton", oldValue: '$30.00', newValue: '$21.00'},
  {id: 17, title:"Banana Split", oldValue: '$29.00', newValue: '$15.00'},
  {id: 18, title:"Milkshake", oldValue: '$32.00', newValue: '$22.00' },
  {id: 19, title:"Durazno con Helado", oldValue: '$30.00', newValue: '$21.00'},
  {id: 20, title:"Helado Frito", oldValue: '$29.00', newValue: '$15.00'},
  {id: 21, title:"Helado Spaguetti", oldValue: '$32.00', newValue: '$22.00' },
  {id: 22, title:"Porc B. Chocolate", oldValue: '$30.00', newValue: '$21.00'},
  {id: 23, title:"Porc B. Mora", oldValue: '$29.00', newValue: '$15.00'},
  {id: 24, title:"Porc B. Durazno", oldValue: '$32.00', newValue: '$22.00' },
  {id: 25, title:"Porc B. ChocoMora", oldValue: '$29.00', newValue: '$15.00'},
  {id: 26, title:"Porc Braunie", oldValue: '$32.00', newValue: '$22.00' },
  {id: 27, title:"Braunie Helado", oldValue: '$30.00', newValue: '$21.00'},
  {id: 28, title:"Chocolate Helado", oldValue: '$29.00', newValue: '$15.00'},
  {id: 29, title:"Mora Helada", oldValue: '$32.00', newValue: '$22.00' },
  {id: 30, title:"Durazno Helado", oldValue: '$32.00', newValue: '$22.00' },
  {id: 31, title:"ChocoMora Helado", oldValue: '$32.00', newValue: '$22.00' },
  {id: 32, title:"Mousse de Maracuya", oldValue: '$32.00', newValue: '$22.00' },
  {id: 33, title:"Frutos Rojos", oldValue: '$32.00', newValue: '$22.00' },
  {id: 34, title:"Tiramisu", oldValue: '$32.00', newValue: '$22.00' },
  {id: 35, title:"Cake", oldValue: '$32.00', newValue: '$22.00' },
  {id: 36, title:"Torta 10 Pers.", oldValue: '$32.00', newValue: '$22.00' },
  {id: 37, title:"Torta 15 Pers.", oldValue: '$32.00', newValue: '$22.00' },
  {id: 38, title:"Torta 20 Pers.", oldValue: '$32.00', newValue: '$22.00' },
  {id: 39, title:"Brazo Gitano Chocolate", oldValue: '$32.00', newValue: '$22.00' },
  {id: 40, title:"Brazo Gitano Mora", oldValue: '$32.00', newValue: '$22.00' },
  {id: 41, title:"Brazo Gitano Nuez", oldValue: '$32.00', newValue: '$22.00' },
  {id: 42, title:"Brazo Gitano ChocoMora", oldValue: '$32.00', newValue: '$22.00' },
  {id: 43, title:"Mousse de Maracuya 10 Pers.", oldValue: '$32.00', newValue: '$22.00' },
  {id: 44, title:"Frutos Rojos 10 Pers.", oldValue: '$32.00', newValue: '$22.00' },
  {id: 45, title:"Tiramisu 10 Pers.", oldValue: '$32.00', newValue: '$22.00' },
]



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  shopList!: ShopType[];

  constructor(
    private modalService: NgbModal
  ){

  }

  ngOnInit(): void {
    this.shopList = ShopData
  }
  
  BasicOpen(basicmodal:any) {
    this.modalService.open(basicmodal);
  }

  ModelProduct(producmodel:any){
    this.modalService.open(producmodel)

  }
}
