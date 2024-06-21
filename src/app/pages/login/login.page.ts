import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  // email:string = "";
  // pass:string = "";


  loginForm: FormGroup;

  passShow: boolean = false;
  passType:string = "password"

  constructor(
    private helperService:HelperService,
    private fb: FormBuilder,
    private authServices: AuthService,
    private router: Router
  ) { 

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  async login(){

    console.log("Aaaaa");
    // this.helperService.showAlert("hola",'hola');
    const loader = await this.helperService.showLoader("Cargando");
    if (this.loginForm.valid){
      const { username, password } = this.loginForm.value;
      this.authServices.login(username, password).subscribe(
        (data: any) => { 
          
          localStorage.setItem('token', data.access);
          console.log(data.access);
          this.router.navigate(['/elegir-propiedad']);
         },
        error =>  {
          console.log(error)
          this.helperService.showAlert('Usuario y/o contraseña no validos.', "Credenciales no validas");
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
  
}
