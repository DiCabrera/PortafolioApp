import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elegir-propiedad',
  templateUrl: './elegir-propiedad.page.html',
  styleUrls: ['./elegir-propiedad.page.scss'],
})
export class ElegirPropiedadPage implements OnInit {

  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; 

  constructor() { }

  ngOnInit() {
  }

}
