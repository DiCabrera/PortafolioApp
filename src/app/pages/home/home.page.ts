import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Share, ShareOptions } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async location(){
    const coordenada = await Geolocation.getCurrentPosition();
    var lat = coordenada.coords.latitude;
    var lon = coordenada.coords.longitude;
   
    var locationUrl = "http://maps.google.com/maps?q="+lat+","+lon; 
    const titleShare = "SOS";
    const textShare = "SOS ⚠ ¡Requiero ayuda urgente! Me encuento aquí: "

    var shareOptions:ShareOptions = {
      title:titleShare,
      text:textShare,
      url:locationUrl
    }
    
    await Share.share(shareOptions);

    console.log("COORDENADAS: ", lat, lon);
    console.log("http://maps.google.com/maps?q="+lat+","+lon);
    console.log(shareOptions);
    
  }

  
}
