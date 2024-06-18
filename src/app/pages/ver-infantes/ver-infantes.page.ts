import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ver-infantes',
  templateUrl: './ver-infantes.page.html',
  styleUrls: ['./ver-infantes.page.scss'],
})
export class VerInfantesPage implements OnInit {

  infantes: any[] = [];
  propiedadId: any = 0;


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,

  ) { }

  ngOnInit() {

    this.propiedadId = this.route.snapshot.paramMap.get('propiedadId');
    this.getInfantes();
  }

  getInfantes() {
    this.dataService.listar_infantes(this.propiedadId).subscribe(
      data => {
        this.infantes = data;
        console.log(this.infantes)
      },
      error => {
        console.error('Error al obtener infantes', error);
      }
    );
  }
  

}
