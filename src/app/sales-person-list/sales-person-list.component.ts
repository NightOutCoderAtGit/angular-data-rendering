import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component-bootstrap.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('anum1','Roy1','arum1.raoy@gmail.com', 80000),
    new SalesPerson('anum2','Roy2','arum2.raoy@gmail.com', 60000),
    new SalesPerson('anum3','Roy3','arum3.raoy@gmail.com', 30000),
    new SalesPerson('anum4','Roy4','arum4.raoy@gmail.com', 510000),
  ];

}
