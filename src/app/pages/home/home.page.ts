import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Share, ShareOptions } from '@capacitor/share';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  propiedadId: any;
  username: string = '';
  numCentroMedico: string = '';
  numBomberos: string = ''
  numCarabineros: string = ''

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.datosUser();
    this.propiedadId = this.route.snapshot.paramMap.get('propiedadId');
    this.obtenerServicios();
    console.log('num carabineros ',this.numCarabineros);
    console.log(this.propiedadId); 
    this.obtenerPropiedad();
    
  }


  obtenerPropiedad() {
    this.dataService.obtenerPropiedad(this.propiedadId).subscribe(
      (data) => {
        console.log('propiedad:', data);
      }
    )

  }

  obtenerServicios() {
    this.dataService.obtenerServicios(this.propiedadId).subscribe(
      (data) => {
        this.numCentroMedico = data[0].numero_asistencia_medica;
        this.numBomberos = data[0].numero_bomberos;
        this.numCarabineros = data[0].numero_carabineros;
        console.log(data);
        console.log('num carabineros ',this.numCarabineros);
        console.log('num carabineros ',this.numBomberos);
        console.log('num carabineros ',this.numCentroMedico);

      }
    )
  }


  datosUser() {
    this.dataService.datosUsuario().subscribe(
      (data) => {
        console.log(data);
        this.username = data;
      }
    )
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
