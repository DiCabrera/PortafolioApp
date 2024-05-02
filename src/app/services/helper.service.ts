import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private alertService:AlertController,
    private loadingController:LoadingController
  ) { }

  async showAlert(msg:any, title:string){
    var alert = await this.alertService.create({
      cssClass:"alertClass", message:msg,header:title, buttons:['Aceptar']});
    
    await alert.present();
    return alert;
  }

  async showLoader(msg:string){
    var loader = await this.loadingController.create({cssClass:"LoaderClass",message:msg,translucent:true})
    await loader.present();
    return loader;
  }

}
