import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $:any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
    
   
  }


  enviar(){
    
   

  //  this.router.navigate(['/']);
  document.body.scrollTop = 0; // For Chrome, Safari and Opera 
  document.documentElement.scrollTop = 0;
  }
}
