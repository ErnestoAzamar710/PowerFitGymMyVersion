import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generateqr',
  templateUrl: './generateqr.page.html',
  styleUrls: ['./generateqr.page.scss'],
})
export class GenerateqrPage implements OnInit {

  public myAngularxQrCode: string = "";
  constructor() {
    this.myAngularxQrCode = 'Hola mundo';
  }

  ngOnInit() {
  }
}
