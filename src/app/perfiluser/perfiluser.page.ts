import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.page.html',
  styleUrls: ['./perfiluser.page.scss'],
})
export class PerfiluserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    window.location.href = '/home'
  }
  editprofile(){
    window.location.href = '/editarperfil'
  }
  gimMovil(){
    window.location.href = '/gimnasiomovil'
  }
  genQR(){
    window.location.href = '/generateqr'
  }

}
