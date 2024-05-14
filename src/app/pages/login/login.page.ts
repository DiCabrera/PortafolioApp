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

    console.log("Aaaaa")

    const loader = await this.helperService.showLoader("Cargando")
    if (this.loginForm.valid){
      const { username, password } = this.loginForm.value;
      this.authServices.login(username, password).subscribe(
        (data: any) => { 
          
          localStorage.setItem('token', data.access);
          console.log(data.access);
          this.router.navigate(['/home']);
          // this.mostrarSnackbar('Bienvenido');
          // this.ngxService.stop();
         },
        error =>  {
          console.log(error)
          // this.mostrarSnackbar("Credenciales no validas");
          // this.ngxService.stop();
          // window.location.reload();
        }
      )
      await loader.dismiss();
    } else {
      this.helperService.showAlert("Por favor ingrese un correo","Ha ocurrido un error")
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
