import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registrar-infante',
  templateUrl: './registrar-infante.page.html',
  styleUrls: ['./registrar-infante.page.scss'],
})
export class RegistrarInfantePage implements OnInit {

  propiedadId: any;


  formInfante: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute

  ) { 

    this.formInfante = this.fb.group({
      childName: ['', Validators.required],
      age: ['', Validators.required],
      rut: ['', Validators.required],
      diagnostic: ['', Validators.required],
      bloodType: ['', Validators.required],
      prevision: ['', Validators.required],
      alergias: ['', Validators.required],
      antecendetesMedicos: ['', Validators.required],
   
    })

  }


  ngOnInit() {
    this.propiedadId = this.route.snapshot.paramMap.get('propiedadId');
    console.log(this.propiedadId)
  }

  register() {
   
    if (this.formInfante.valid) {
        const { childName, age, rut, diagnostic, bloodType, prevision, alergias, antecendetesMedicos   } = this.formInfante.value;
        const formData = new FormData();
        formData.append('childName', childName);
        formData.append('age', age);
        formData.append('rut', rut);
        formData.append('diagnostic', diagnostic);
        formData.append('bloodType', bloodType);
        formData.append('prevision', prevision);
        formData.append('alergias', alergias);
        formData.append('antecendetesMedicos', antecendetesMedicos);

        this.dataService.registrarInfante(this.propiedadId, formData).subscribe(
          (response) => {
            console.log(formData)
          }
        )
        this.router.navigate(['/home', this.propiedadId]);

    } else {
      console.log('Formulario no valido');
    }

    
  }






}
