import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    window.location.href = '/home'
  }
  confirmarpago(){
    window.location.href = '/confipay'
  }
}
