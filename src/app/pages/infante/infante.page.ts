import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-infante',
  templateUrl: './infante.page.html',
  styleUrls: ['./infante.page.scss'],
})
export class InfantePage implements OnInit {

  infante: any;
  idInfante: any;
  
  childName: string= "";
  age: string= "";
  rut: string= "";
  diagnostico: string= "";
  bloodType: string= "";
  antecedentesMedicos: string= "";
  alerigas: string = "";
  prevision: string = "";

  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idInfante = this.route.snapshot.paramMap.get('infanteId');
    console.log(this.idInfante);
    this.dataInfante(); 
  }

  dataInfante() {
    this.dataService.detalle_infante(this.idInfante).subscribe( 
     data => {
      this.childName = data.child_name;
      this.age = data.age;
      this.rut = data.rut;
      this.antecedentesMedicos = data.antecendetes_medicos;
      this.alerigas = data.alergias;
      this.prevision = data.prevision;
      this.diagnostico = data.diagnostic;
      this.bloodType = data.blood_type;



      console.log(data);
    },
    error => {
      console.error('Error al obtener infantes', error);
    });
  }

}
