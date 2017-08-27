import { Component, OnInit } from '@angular/core';
import { ServiceModule } from '../app.service'
import { ActivatedRoute,Router } from '@angular/router'

declare var $: any

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
  providers: [ServiceModule]
})
export class DescripcionComponent implements OnInit {

  private data:any
  

  private tabla = new Array()
  private loading: boolean;
  img:string
  nombre:string
  ocultar:boolean=true
  constructor(private service: ServiceModule, private acty: ActivatedRoute,private router:Router) {
  
   }

  ngOnInit() {
 
   
    this.tabla = []
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  

    this.acty.queryParams.subscribe(parm => {

//  this.loading = true;

      let recib = parm['info']
      
      this.service.getPetsuno(recib).subscribe(param => {
        // setTimeout(() => {
           this.loading = false;
          this.data = param
          
          this.nombre=this.data.nombre
          this.img=this.data.img
          this.tabla = [
            { title: 'Animal', info: this.data.tipo },
            { title: 'Edad', info: '4 años' },
            { title: 'Tamaño', info: this.data.altura },
            { title: 'Sexo', info: this.data.sexo },
            { title: 'Sobre mi', info: "##########"}
          ]

         
     
      })
        
    })

  



  }



 ruta(){

  this.router.navigate(['/','formulario']);
  document.body.scrollTop = 0; // For Chrome, Safari and Opera 
  document.documentElement.scrollTop = 0;

 }

}
