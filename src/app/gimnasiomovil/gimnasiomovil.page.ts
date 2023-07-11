import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gimnasiomovil',
  templateUrl: './gimnasiomovil.page.html',
  styleUrls: ['./gimnasiomovil.page.scss'],
})
export class GimnasiomovilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  homeUsu(){
    window.location.href = '/usuario'
  }
  gimMovil(){
    window.location.href = '/gim-mov-dis'
  }
}
