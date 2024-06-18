import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-elegir-propiedad',
  templateUrl: './elegir-propiedad.page.html',
  styleUrls: ['./elegir-propiedad.page.scss'],
})
export class ElegirPropiedadPage implements OnInit {


  propiedadId: number = 0;
  username: string = '';

  propiedades: any[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.datosUser()
    this.listarPropiedades();
  }



  datosUser() {
    this.dataService.datosUsuario().subscribe(
      (data) => {
        console.log(data);
        this.username = data;
      }
    )
  }



  elegirPropiedad() {
    this.router.navigate(['/home', this.propiedadId]);
  }


  listarPropiedades() {
    this.dataService.listarPropiedades().subscribe(
      (data) => {
        console.log('Propiedades:', data); // Para verificar los datos recibidos
        this.propiedades =data;
      }
    );
  }

}
