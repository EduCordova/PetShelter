import { Component, OnInit ,EventEmitter} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {Router} from "@angular/router";
import {ServiceModule} from '../app.service'

declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ServiceModule]
  
})
export class HomeComponent implements OnInit {
public title1="ADOPTA UNA MASCOTA"

// nav = new EventEmitter<any|MaterializeAction>();
// datasos=[]

  constructor(private dataservice :ServiceModule, private router: Router) { }

  ngOnInit() {
    // this.nav.emit({action:"collapsible",params:['collapsible']});
  $('.parallax').parallax();

    // this.dataservice.getData2().subscribe(datos=>this.datasos=datos)

 
 
  }


   up():void{

    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0;
    

    
   }

 



}
