import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confipay',
  templateUrl: './confipay.page.html',
  styleUrls: ['./confipay.page.scss'],
})
export class ConfipayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    window.location.href = '/home'
  }
}
