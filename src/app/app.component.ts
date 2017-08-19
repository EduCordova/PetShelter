import { Component } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
declare var $:any




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  color = " teal lighten-3";
  
  //  nav = new EventEmitter<any|MaterializeAction>();
  rutas = [
    { ruta: "/home", nombre: "Home" ,icon:"home" },
    { ruta: "/adopcion", nombre: "Adopta" ,icon:"pets"},
    { ruta: "/nosotros", nombre: "Conocenos" ,icon:"people"},
    { ruta: "/donaciones", nombre: "Donaciones",icon:"redeem" }
  ];
  constructor() {

   
  }






  sideNav() {

    // this.nav.emit({action:"sideNav",params:['hide']});
    //  console.log("enviado");
  }

  up() {

    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0;
  }


}



