import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

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
