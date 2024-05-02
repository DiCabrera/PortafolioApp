import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email:string = "";
  pass:string = "";
  passShow: boolean = false;
  passType:string = "password"

  constructor(
    private helperService:HelperService
  ) { }

  ngOnInit() {
  }

  async login(){
    const loader = await this.helperService.showLoader("Cargando")
    if (this.email == ""){
      await loader.dismiss();
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
