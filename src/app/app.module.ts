import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import  {RoutingModule} from './app.routing'
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


import { AdopcionComponent } from './adopcion/adopcion.component';
import { HomeComponent } from './home/home.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { InformacionComponent } from './informacion/informacion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingModule , ANIMATION_TYPES} from 'ngx-loading';
import { DescripcionComponent } from './descripcion/descripcion.component';
import {FiltradoCombos} from './app.pipe';
import { FormComponent } from './form/form.component';




//firebase

// Initialize Firebase
  export const Fireconfig = {
    apiKey: "AIzaSyBe-QUnL2Ic-FugpbnHwAVWYK7ZYBgrZjE",
    authDomain: "ng-animals-b7695.firebaseapp.com",
    databaseURL: "https://ng-animals-b7695.firebaseio.com",
    storageBucket: "ng-animals-b7695.appspot.com",
    messagingSenderId: "141838975391"
  };


@NgModule({
  declarations: [
    AppComponent,
    AdopcionComponent,
    HomeComponent,
    DonacionesComponent,
    InformacionComponent,
    NotFoundComponent,
    LoadingComponent,
    DescripcionComponent,
    FiltradoCombos,
    FormComponent
 
  
   
  ],
  imports: [
    
    BrowserModule,
    AngularFireModule.initializeApp(Fireconfig) ,
    AngularFireDatabaseModule,
    MaterializeModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '4px',
        primaryColour: '#040303',
        secondaryColour: '#040303',
        tertiaryColour: '#040303'
    })
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
