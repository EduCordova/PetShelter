import { Component, OnInit, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
import { ServiceModule } from '../app.service'
import { Idata } from '../data'



declare var $: any;

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css'],
  providers: [ServiceModule]
})
export class AdopcionComponent implements OnInit {


  perros: Idata[] = [
    {
      id: "",
      nombre: "",
      altura: "",
      sexo: "",
      tipo: "",
      img: "",
    }];

  title = 'ADOPCIONES'
  public loading = false;
    rv:boolean


  sexo = ['Macho', 'Hembra']
  tam = ['Grande', 'Mediana', 'Pequeña']
  tipo = ['Perro', 'Gato', 'Tortuga'];
  animals: any
  // animals2:any
  model = 0
  filtro: string = ""
  filtro2: string = ""
  filtro3: string = ""

  muestra: boolean
  oculto: boolean
  // mensage = "hola"
  // gd={}

  constructor(
    private dataService: ServiceModule,
    private router: Router,
    private acti: ActivatedRoute
  ) {


    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered


  }


  ngOnInit() {



    this.loading = true;
    this.oculto = true;

    // $('select').material_select();
    this.dataService.getPets().subscribe(
      data => {
        setTimeout(() => {

          this.perros = data;
          this.muestra = true
          this.loading = false;

        }, 400);

      }
    );


    // this.sexo = ['Macho', 'Hembra'];
    // this.tam = ['Pequeño', 'Mediano', 'Grande'];
    // this.tipo = ['Perros', 'Gatos', 'Otros'];


  }



  onSelect(event) {
    this.filtro = event
    // console.log(this.filtro)

    if(event!=""){
      this.rv=true
    }
  }

  onSelect2(event) {
    this.filtro2 = event
    // console.log(this.filtro2)
      if(event!=""){
      this.rv=true
    }
  }
  onSelect3(event) {
    this.filtro3 = event
    // console.log(this.filtro2)
      if(event!=""){
      this.rv=true
    }
  }

  todo() {
    $('#s1 option').each(function () {
      if (this.defaultSelected) {
        this.selected = true;
        return false;
      }
    });

    $('#s2 option').each(function () {
      if (this.defaultSelected) {
        this.selected = true;
        return false;
      }
    });

     $('#s3 option').each(function () {
      if (this.defaultSelected) {
        this.selected = true;
        return false;
      }
    });

    this.filtro = ""
    this.filtro2 = ""
  this.filtro3 = ""

  this.rv=false
  }


  // closeModal() {
  //   // $('#modal1').modal('close')

  //   $('#adoptar').modal('close'
  //   );
  // }

  env(data): void {

    // this.gd={}
    // this.gd = data

    this.router.navigate(['adopcion/descripcion/'], { queryParams: { 'info': data } })

    //  $('.materialboxed').materialbox();
    // this.gd = data
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0;
    // For IE and Firefox
  }


}
