import { Injectable, Component } from '@angular/core'
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ServiceModule {
    pets: FirebaseListObservable<any[]>

    constructor(private http: Http, private af: AngularFireDatabase) {
        //CONSTRUCTOR VOID

    }

    getData() {
        return this.http.get('https://jsonplaceholder.typicode.com/photos').map(res => res.json())

    }
    getData2() {
        return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json())

    }

    onePet(id) {
        return this.http.get('https://jsonplaceholder.typicode.com/photos/' + id).map(res => res.json())

    }

    getPets() {
        this.pets = this.af.list('/animals') as FirebaseListObservable<any[]>;
        return this.pets;
    }


    //  getPetsFiltro(filtro: string) {
    //     this.pets = this.af.list('/animals', {

    //        query: {
    //             orderByChild: 'id', equalTo: filtro
    //         }
    //     })
    // }

     getPetsuno(id) {
         let val = id-1
       return  this.af.object('/animals/'+val)
    //    return  this.af.list('/animals/'+val)
        
    }




    //     }) as FirebaseListObservable<any[]>
    //     return this.pets;


    // }



}