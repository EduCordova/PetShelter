import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {


staff:any;
alb:any= 3;
  constructor() { }

  ngOnInit() {

    this.staff=[
      {nombre:'Refugio 1'},
      {nombre:'Refugio 2'}, 
      {nombre:'Refugio 3'}
    

    ]
  }

}
