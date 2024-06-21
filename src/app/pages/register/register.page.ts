import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  passShow: boolean = false;
  passType:string = "password"

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private helperService:HelperService,
    
  ) {

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, ],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    })

   }

   async register() {
    const loader = await this.helperService.showLoader("Cargando");
    if(this.registerForm.valid) {
      const { username, email, password, password2 } = this.registerForm.value;
      const newUser : User = { username, email, password, password2 };
      this.authService.register(newUser).subscribe(
        response => {

          console.log(newUser) 
          this.helperService.showAlert("Su cuenta ha sido creada con exito.","Felicidades!")
          this.router.navigate(['/login']);
        },error =>  {
          if (error.error.username) {
            this.helperService.showAlert("El nombre de usuario ya se encuentra registrado","Error")

          } else {
            this.helperService.showAlert("Las contraseñas no coinciden","Error")

          }
          console.log('error')
          console.log(error.error)
        }
          
        )  
      await loader.dismiss();
    } else {
      this.helperService.showAlert("Por favor llene todos los campos","Ha ocurrido un error")
      await loader.dismiss();

    }
  }


   verPass(){
    if(this.passShow){
      this.passShow = false;
      this.passType = "password";
    }
    else {
      this.passShow = true;
      this.passType = "string"
    }
  }

  ngOnInit() {
  }

}
