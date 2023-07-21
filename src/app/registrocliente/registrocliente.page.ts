import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.page.html',
  styleUrls: ['./registrocliente.page.scss'],
})
export class RegistroclientePage implements OnInit {

  photos: String[]=[];
  constructor(public photoservices:PhotosService) {
    this.photos = this.photoservices.photos;
  }

  addPhotoToGallery() {
    this.photoservices.addNewToGallery();
  }

  ngOnInit() {
  }
  logout(){
    window.location.href = '/home'
  }
}
