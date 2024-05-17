import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-registrar-propiedad',
  templateUrl: './registrar-propiedad.page.html',
  styleUrls: ['./registrar-propiedad.page.scss'],
})
export class RegistrarPropiedadPage implements OnInit {


  formPropiedad: FormGroup


  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { 



    this.formPropiedad = this.fb.group({
      owner: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
    })


  }

  register() {
   
    if (this.formPropiedad.valid) {
        const { owner, address, contactNumber } = this.formPropiedad.value;
        const formData = new FormData();
        formData.append('owner', owner);
        formData.append('address', address);
        formData.append('contactNumber', contactNumber);

        this.dataService.registrarPropiedad(formData).subscribe(
          (response) => {
            console.log(formData)
          }
        )
    }

    
  }






  ngOnInit() {
  }

}
