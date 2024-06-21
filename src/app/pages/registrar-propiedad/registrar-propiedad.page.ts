import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-registrar-propiedad',
  templateUrl: './registrar-propiedad.page.html',
  styleUrls: ['./registrar-propiedad.page.scss'],
})
export class RegistrarPropiedadPage implements OnInit {


  formPropiedad: FormGroup;


  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private helperService:HelperService,
  ) { 



    this.formPropiedad = this.fb.group({
      owner: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
      centroMedico: ['', Validators.required],
      bomberos: ['', Validators.required],
      carabineros: ['', Validators.required],
    })


  }

  async register() {
    
    const loader = await this.helperService.showLoader("Cargando");
    if (this.formPropiedad.valid) {
        const { owner, address, contactNumber, centroMedico, bomberos, carabineros } = this.formPropiedad.value;
        const formData = new FormData();
        formData.append('owner', owner);
        formData.append('address', address);
        formData.append('contactNumber', contactNumber);
        formData.append('centroMedico', centroMedico);
        formData.append('bomberos', bomberos);
        formData.append('carabineros', carabineros);

        this.dataService.registrarPropiedad(formData).subscribe(
          (response) => {
            console.log(formData)
          }
        )
        this.helperService.showAlert("La propiedad ha sido registrada con exito.","Felicidades")
        this.router.navigate(['/elegir-propiedad']);
        await loader.dismiss();
    } else {
      this.helperService.showAlert("Por favor llene todos los campos","Ha ocurrido un error")
      await loader.dismiss();

    }

    
  }






  ngOnInit() {
  }

}
