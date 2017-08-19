import { Component, NgModule, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServiceModule } from '../app.service'
import { Idata } from '../data'

declare var $: any

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css'],
  providers: [ServiceModule]
})
export class DonacionesComponent implements OnInit {
  public titulo: string = "DONACIONES"

  infoAl = [
    { nombre: "Albergue 1", dir: "av. numb1  #548", wsp: "958-968-554", fb: "www.alberge1.com", cuenta: "987-554-544" },
    { nombre: "Albergue 2", dir: "av. numb1  #548", wsp: "958-968-554", fb: "www.alberge2.com", cuenta: "987-554-544" },
    { nombre: "Albergue 3", dir: "av. numb1  #548", wsp: "958-968-554", fb: "www.alberge3.com", cuenta: "987-554-544" }

  ]


  constructor(private Service: ServiceModule) { }

  ngOnInit() {
    //  this.Service.getPets().subscribe(p => this.items = p);


  }



}
